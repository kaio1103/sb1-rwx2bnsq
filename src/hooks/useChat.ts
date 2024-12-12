import { useState, useRef, useEffect } from 'react';
import { Message } from '../types/chat';
import { useChatMessages } from './useChatMessages';
import { useVoiceInput } from './useVoiceInput';
import { useScrollToBottom } from './useScrollToBottom';

export function useChat() {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const {
    messages,
    isLoading,
    handleSendMessage,
  } = useChatMessages();

  useVoiceInput(setInput);
  useScrollToBottom(messagesEndRef, messages);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    await handleSendMessage(input);
    setInput('');
  };

  return {
    messages,
    input,
    isLoading,
    messagesEndRef,
    setInput,
    handleSubmit,
  };
}