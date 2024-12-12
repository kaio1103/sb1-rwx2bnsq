import { messages } from '../constants/messages';

const API_KEY = 'app-SQ0iQbBN8TxvNVMBdDyyNWuH';
const API_URL = 'https://api.dify.ai/v1/chat-messages';

interface SendMessageOptions {
  inputs?: Record<string, unknown>;
  query: string;
  response_mode: 'streaming';
  conversation_id?: string;
  user: string;
  files: never[];
}

export async function sendMessage(message: string, conversationId: string = '') {
  try {
    const options: SendMessageOptions = {
      inputs: {},
      query: message,
      response_mode: 'streaming',
      conversation_id: conversationId,
      user: 'Kai_neko',
      files: [],
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    });

    if (!response.ok) {
      throw new Error(messages.errors.sendFailed);
    }

    return response.body;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}