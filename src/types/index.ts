export interface Message {
  content: string;
  sender: 'user' | 'expert' | 'system';
  timestamp: string;
}