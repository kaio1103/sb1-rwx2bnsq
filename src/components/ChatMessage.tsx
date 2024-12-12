import React from 'react';
import { User } from 'lucide-react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center">
          <User size={18} className="text-white" />
        </div>
      )}
      <div
        className={`relative max-w-[80%] px-4 py-2 rounded-lg ${
          isUser
            ? 'bg-blue-500/80 text-white'
            : 'bg-white/80 text-black'
        }`}
      >
        {!isUser && (
          <div className="absolute left-[-8px] top-3 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-white/80 border-b-[8px] border-b-transparent" />
        )}
        {message.content}
      </div>
    </div>
  );
}