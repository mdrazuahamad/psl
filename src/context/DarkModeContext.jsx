import { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const toggleDark = () => setDark(!dark);

  return (
    <DarkModeContext.Provider value={{ dark, toggleDark }}>
      <div className={dark ? "dark" : ""}>{children}</div>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
