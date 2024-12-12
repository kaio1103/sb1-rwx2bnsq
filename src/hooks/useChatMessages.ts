import { useState } from 'react';
import { Message } from '../types/chat';
import { sendMessage } from '../api/chat';
import { messages } from '../constants/messages';

export function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [conversationId, setConversationId] = useState('');

  const handleSendMessage = async (input: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setIsStreaming(false);

    try {
      const response = await sendMessage(input, conversationId);
      if (!response) throw new Error(messages.errors.noResponse);

      const reader = response.getReader();
      let assistantMessage = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = new TextDecoder().decode(value);
        const lines = text.split('\n').filter(line => line.trim());

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = JSON.parse(line.slice(6));
            if (data.event === 'message') {
              if (!isStreaming) {
                setIsStreaming(true);
                setIsLoading(false);
              }
              assistantMessage += data.answer;
              updateMessages(data.id, assistantMessage);
            }
            if (data.conversation_id) {
              setConversationId(data.conversation_id);
            }
          }
        }
      }
    } catch (error) {
      console.error(messages.errors.sendFailed, error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          content: messages.errors.sendFailed,
          role: 'assistant',
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  const updateMessages = (id: string, content: string) => {
    setMessages(prev => {
      const newMessages = [...prev];
      const lastMessage = newMessages.find(m => m.role === 'assistant' && m.id === id);
      if (lastMessage) {
        lastMessage.content = content;
      } else {
        newMessages.push({
          id,
          content,
          role: 'assistant',
          timestamp: Date.now(),
        });
      }
      return newMessages;
    });
  };

  return {
    messages,
    isLoading,
    handleSendMessage,
  };
}