import React from 'react';
import { CharacterSpace } from './components/CharacterSpace';
import { ChatSection } from './components/ChatSection';
import { Background } from './components/Background';
import { useChat } from './hooks/useChat';
import { imageConfig } from './config/images';

export default function App() {
  const {
    messages,
    input,
    isLoading,
    messagesEndRef,
    setInput,
    handleSubmit,
  } = useChat();

  return (
    <Background className="flex">
      <CharacterSpace 
        publicId={input.trim() ? imageConfig.character.thinking : imageConfig.character.default}
      />
      <ChatSection
        messages={messages}
        input={input}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
        onInputChange={setInput}
        onSubmit={handleSubmit}
      />
    </Background>
  );
}