import React from 'react';
import { Home, Compass } from 'lucide-react';
import { useExpert } from '../../context/ExpertContext';

const ChatHeader = () => {
  const { selectedExpert } = useExpert();
  const isBasic = selectedExpert === 'basic';

  return (
    <div className={`p-4 ${
      isBasic 
        ? 'bg-sage-50 dark:bg-gray-800' 
        : 'bg-maroon-900 dark:bg-gray-800'
    } transition-colors duration-200`}>
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isBasic 
            ? 'bg-sage-100 dark:bg-gray-700' 
            : 'bg-maroon-800 dark:bg-gray-700'
        }`}>
          {isBasic ? (
            <Home className="w-6 h-6 text-sage-700 dark:text-gray-300" />
          ) : (
            <Compass className="w-6 h-6 text-maroon-100 dark:text-gray-300" />
          )}
        </div>
        <div>
          <h2 className={`text-lg font-semibold ${
            isBasic 
              ? 'text-sage-900 dark:text-gray-100' 
              : 'text-maroon-50 dark:text-gray-100'
          }`}>
            {isBasic ? 'Chat with Vaastu Advisor' : 'Expert Vaastu Consultation'}
          </h2>
          <p className={`text-sm ${
            isBasic 
              ? 'text-sage-600 dark:text-gray-400' 
              : 'text-maroon-200 dark:text-gray-400'
          }`}>
            {isBasic ? 'Basic Consultation' : 'Premium Service - ₹999/session'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;