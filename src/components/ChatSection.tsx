import React from 'react';
import { Message } from '../types/chat';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { LoadingMessage } from './LoadingMessage';

interface ChatSectionProps {
  messages: Message[];
  input: string;
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatSection({ 
  messages, 
  input, 
  isLoading, 
  messagesEndRef, 
  onInputChange, 
  onSubmit 
}: ChatSectionProps) {
  const lastMessage = messages[messages.length - 1];
  const showLoading = isLoading && (!lastMessage || lastMessage.role === 'user');

  return (
    <div className="w-1/2 flex flex-col h-screen">
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {showLoading && <LoadingMessage />}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput 
        input={input}
        isLoading={isLoading}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}