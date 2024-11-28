import React, { useRef, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ChatHeader from './ChatHeader';
import { useChat } from '../../hooks/useChat';
import { useExpert } from '../../context/ExpertContext';

const ChatContainer = () => {
  const { messages, sendMessage, isLoading } = useChat();
  const { selectedExpert } = useExpert();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isBasic = selectedExpert === 'basic';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`flex-1 flex flex-col transition-colors duration-200
      ${isBasic 
        ? 'bg-sage-50 dark:bg-gray-900' 
        : 'bg-maroon-50 dark:bg-gray-900'}`}>
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto p-4">
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </div>

      <MessageInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatContainer;