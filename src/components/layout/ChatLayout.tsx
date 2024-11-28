import React from 'react';
import Sidebar from './Sidebar';
import ChatContainer from '../chat/ChatContainer';
import { ExpertProvider } from '../../context/ExpertContext';

const ChatLayout = () => {
  return (
    <ExpertProvider>
      <div className="flex h-screen bg-gray-900 dark:bg-gray-950">
        <Sidebar />
        <ChatContainer />
      </div>
    </ExpertProvider>
  );
};

export default ChatLayout;