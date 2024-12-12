export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: number;
}

export interface ChatResponse {
  event: string;
  task_id: string;
  id: string;
  answer: string;
  conversation_id: string;
  created_at: number;
}