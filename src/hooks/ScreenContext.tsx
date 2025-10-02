import React, { createContext, useContext, useEffect, useState } from "react";

interface ScreenContextType {
  isMobile: boolean;
}

const ScreenContext = createContext<ScreenContextType>({ isMobile: false });

export const ScreenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenContext.Provider value={{ isMobile }}>
      {children}
    </ScreenContext.Provider>
  );
};

// Custom hook for easy usage
export const useScreen = () => useContext(ScreenContext);
