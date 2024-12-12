import React from 'react';
import { Send } from 'lucide-react';
import { messages } from '../../constants/messages';

interface SendButtonProps {
  disabled?: boolean;
}

export function SendButton({ disabled }: SendButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      aria-label={disabled ? messages.loading.sending : messages.buttons.send}
      className="px-4 py-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-600/80 focus:outline-none focus:ring-2 focus:ring-blue-500/80 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Send size={20} />
    </button>
  );
}