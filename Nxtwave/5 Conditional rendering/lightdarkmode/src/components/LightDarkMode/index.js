import React, { useState } from "react";
import "./index.css";

const LightDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const modeClass = isDarkMode ? "dark-mode" : "light-mode";
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <div className={`container ${modeClass}`}>
      <h1 className="heading">Click To Change Mode</h1>
      <button className="mode-button" onClick={toggleMode}>
        {buttonText}
      </button>
    </div>
  );
};

export default LightDarkMode;
