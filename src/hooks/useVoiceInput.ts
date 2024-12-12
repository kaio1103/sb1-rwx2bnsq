import { useEffect, useCallback } from 'react';

export function useVoiceInput(onInput: (text: string) => void) {
  const startVoiceInput = useCallback(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.warn('Speech recognition is not supported in this browser');
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      onInput(text);
    };

    recognition.start();
  }, [onInput]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        startVoiceInput();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [startVoiceInput]);
}