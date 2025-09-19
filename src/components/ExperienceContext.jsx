// src/context/ExperienceContext.jsx
import { createContext, useContext, useState } from "react";

const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  const [started, setStarted] = useState(false);

  return (
    <ExperienceContext.Provider value={{ started, setStarted }}>
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperience = () => useContext(ExperienceContext);
