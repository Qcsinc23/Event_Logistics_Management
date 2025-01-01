import React, { useEffect } from 'react';
import Konva from 'konva';

interface KonvaProviderProps {
  children: React.ReactNode;
}

export const KonvaProvider: React.FC<KonvaProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Konva
    if (!window.Konva) {
      window.Konva = Konva;
    }
  }, []);

  return <>{children}</>;
};
