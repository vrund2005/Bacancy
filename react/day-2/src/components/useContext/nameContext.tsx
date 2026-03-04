import { createContext, useContext, useState, ReactNode } from "react";

interface NameContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const NameContext = createContext<NameContextType | undefined>(
  undefined
);

// Create this custom hook
export const useName = () => {
  const context = useContext(NameContext);
  if (context === undefined) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
};

export const NameProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("Alpha");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
