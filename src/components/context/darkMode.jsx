import React, { useState, createContext } from "react";

const darkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <darkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </darkModeContext.Provider>
    </>
  );
};

export { DarkModeProvider, darkModeContext };
