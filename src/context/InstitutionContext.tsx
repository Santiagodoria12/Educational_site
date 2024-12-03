import React, { createContext, useContext, useState, useEffect } from 'react';

type InstitutionType = 'universidad' | 'colegio';

interface InstitutionContextType {
  institutionType: InstitutionType;
  setInstitutionType: (type: InstitutionType) => void;
  getInstitutionText: () => string;
}

const InstitutionContext = createContext<InstitutionContextType | undefined>(undefined);

export const InstitutionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [institutionType, setInstitutionType] = useState<InstitutionType>('universidad');

  useEffect(() => {
    const interval = setInterval(() => {
      setInstitutionType(prev => prev === 'universidad' ? 'colegio' : 'universidad');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getInstitutionText = () => {
    return institutionType.charAt(0).toUpperCase() + institutionType.slice(1);
  };

  return (
    <InstitutionContext.Provider value={{ institutionType, setInstitutionType, getInstitutionText }}>
      {children}
    </InstitutionContext.Provider>
  );
};

export const useInstitution = () => {
  const context = useContext(InstitutionContext);
  if (!context) {
    throw new Error('useInstitution must be used within an InstitutionProvider');
  }
  return context;
};