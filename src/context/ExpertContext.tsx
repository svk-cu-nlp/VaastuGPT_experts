import React, { createContext, useContext, useState, ReactNode } from 'react';

type ExpertType = 'basic' | 'experienced';

interface ExpertContextType {
  selectedExpert: ExpertType;
  setSelectedExpert: (expert: ExpertType) => void;
}

const ExpertContext = createContext<ExpertContextType | undefined>(undefined);

export const ExpertProvider = ({ children }: { children: ReactNode }) => {
  const [selectedExpert, setSelectedExpert] = useState<ExpertType>('basic');

  return (
    <ExpertContext.Provider value={{ selectedExpert, setSelectedExpert }}>
      {children}
    </ExpertContext.Provider>
  );
};

export const useExpert = () => {
  const context = useContext(ExpertContext);
  if (context === undefined) {
    throw new Error('useExpert must be used within an ExpertProvider');
  }
  return context;
};