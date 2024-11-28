import React from 'react';
import ChatLayout from './components/layout/ChatLayout';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ChatLayout />
    </ThemeProvider>
  );
}

export default App;