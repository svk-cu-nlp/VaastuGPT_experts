import React from 'react';
import { useExpert } from '../../context/ExpertContext';
import { Home, Compass } from 'lucide-react';
import ThemeToggle from '../theme/ThemeToggle';

const ExpertButton = ({ type, label, price, isSelected, onClick }: {
  type: string;
  label: string;
  price: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const Icon = type === 'basic' ? Home : Compass;
  
  return (
    <button
      onClick={onClick}
      className={`flex flex-col w-full px-4 py-3 rounded-lg transition-colors ${
        isSelected
          ? 'bg-white bg-opacity-10 text-white dark:bg-gray-700'
          : 'text-gray-400 hover:bg-white hover:bg-opacity-5 dark:hover:bg-gray-700'
      }`}
    >
      <div className="flex items-center space-x-3 mb-1">
        <Icon className="w-5 h-5" />
        <span className="font-medium">{label}</span>
      </div>
      <span className="text-sm opacity-75 ml-8">{price}</span>
    </button>
  );
};

const Sidebar = () => {
  const { selectedExpert, setSelectedExpert } = useExpert();

  return (
    <div className="w-80 bg-gray-900 dark:bg-gray-800 p-4 flex flex-col border-r border-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6 px-4">
        <h1 className="text-xl font-bold text-white dark:text-gray-100">Vaastu Consultation</h1>
        <ThemeToggle />
      </div>
      <div className="space-y-2">
        <ExpertButton
          type="basic"
          label="Basic Vaastu Advisor"
          price="₹499/session"
          isSelected={selectedExpert === 'basic'}
          onClick={() => setSelectedExpert('basic')}
        />
        <ExpertButton
          type="experienced"
          label="Premium Vaastu Expert"
          price="₹999/session"
          isSelected={selectedExpert === 'experienced'}
          onClick={() => setSelectedExpert('experienced')}
        />
      </div>
    </div>
  );
};

export default Sidebar;