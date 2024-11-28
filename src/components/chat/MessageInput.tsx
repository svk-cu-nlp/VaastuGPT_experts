import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useExpert } from '../../context/ExpertContext';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const MessageInput = ({ onSendMessage, isLoading }: MessageInputProps) => {
  const [message, setMessage] = useState('');
  const { selectedExpert } = useExpert();
  const isBasic = selectedExpert === 'basic';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`border-t p-4 ${
      isBasic 
        ? 'border-sage-200 dark:border-gray-700 bg-sage-50 dark:bg-gray-900' 
        : 'border-maroon-200 dark:border-gray-700 bg-maroon-50 dark:bg-gray-900'
    }`}>
      <div className="flex space-x-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className={`flex-1 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
            isBasic
              ? 'bg-white dark:bg-gray-800 text-sage-900 dark:text-gray-100 focus:ring-sage-500 dark:focus:ring-gray-600'
              : 'bg-white dark:bg-gray-800 text-maroon-900 dark:text-gray-100 focus:ring-maroon-500 dark:focus:ring-gray-600'
          }`}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !message.trim()}
          className={`rounded-lg px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            isBasic
              ? 'bg-sage-600 dark:bg-gray-700 hover:bg-sage-700 dark:hover:bg-gray-600 text-white'
              : 'bg-maroon-600 dark:bg-gray-700 hover:bg-maroon-700 dark:hover:bg-gray-600 text-white'
          }`}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;