import React from 'react';
import { Home, Compass } from 'lucide-react';
import { Message } from '../../types';
import { useExpert } from '../../context/ExpertContext';

const MessageBubble = ({ message, isUser }: { message: Message; isUser: boolean }) => {
  const { selectedExpert } = useExpert();
  const isBasic = selectedExpert === 'basic';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
          isBasic 
            ? 'bg-sage-100 dark:bg-gray-800' 
            : 'bg-maroon-100 dark:bg-gray-800'
        }`}>
          {isBasic ? (
            <Home className="w-5 h-5 text-sage-700 dark:text-gray-300" />
          ) : (
            <Compass className="w-5 h-5 text-maroon-700 dark:text-gray-300" />
          )}
        </div>
      )}
      <div className="max-w-[70%]">
        <div
          className={`rounded-lg px-4 py-2 shadow-sm ${
            isUser
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
              : isBasic
                ? 'bg-sage-200 dark:bg-gray-800 text-sage-900 dark:text-gray-100'
                : 'bg-maroon-200 dark:bg-gray-800 text-maroon-900 dark:text-gray-100'
          }`}
        >
          {message.content}
        </div>
        <div className={`text-xs mt-1 ${
          isUser 
            ? 'text-right text-gray-500 dark:text-gray-400' 
            : isBasic 
              ? 'text-sage-600 dark:text-gray-400' 
              : 'text-maroon-600 dark:text-gray-400'
        }`}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

const MessageList = ({ messages }: { messages: Message[] }) => {
  const { selectedExpert } = useExpert();
  const isBasic = selectedExpert === 'basic';

  const welcomeMessage: Message = {
    content: isBasic
      ? "Welcome! I'm here to provide basic Vaastu guidance."
      : "Namaste! I'm your certified Vaastu expert with 15+ years of experience.",
    sender: 'expert',
    timestamp: new Date().toISOString(),
  };

  const allMessages = [welcomeMessage, ...messages];

  return (
    <div className="space-y-4">
      {allMessages.map((message, index) => (
        <MessageBubble
          key={index}
          message={message}
          isUser={message.sender === 'user'}
        />
      ))}
    </div>
  );
};

export default MessageList;