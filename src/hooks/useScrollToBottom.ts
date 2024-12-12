import { useEffect } from 'react';
import { Message } from '../types/chat';

export function useScrollToBottom(
  ref: React.RefObject<HTMLDivElement>,
  messages: Message[]
) {
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, ref]);
}