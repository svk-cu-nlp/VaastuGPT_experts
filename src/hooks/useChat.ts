import { useState } from 'react';
import { Message } from '../types';
import { useExpert } from '../context/ExpertContext';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedExpert } = useExpert();

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      const userMessage: Message = {
        content,
        sender: 'user',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, userMessage]);

      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          expertType: selectedExpert,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      const expertMessage: Message = {
        content: data.response,
        sender: 'expert',
        timestamp: new Date().toISOString(),
      };

      setMessages(prev => [...prev, expertMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message to chat
      const errorMessage: Message = {
        content: 'Sorry, there was an error sending your message. Please try again.',
        sender: 'system',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
};