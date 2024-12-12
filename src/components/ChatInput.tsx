import React from 'react';
import { Send } from 'lucide-react';
import { messages } from '../constants/messages';
import { InputField } from './ui/InputField';
import { SendButton } from './ui/SendButton';

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({ input, isLoading, onInputChange, onSubmit }: ChatInputProps) {
  return (
    <form onSubmit={onSubmit} className="p-4">
      <div className="flex gap-2">
        <InputField
          value={input}
          onChange={onInputChange}
          disabled={isLoading}
          placeholder={messages.placeholders.messageInput}
        />
        <SendButton disabled={isLoading} />
      </div>
    </form>
  );
}