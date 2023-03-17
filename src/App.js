import React, { useState } from "react";
import ThemeContext from "./context/theme-context/ThemeContext";
import Header from "./components/header/Header"
import Main from './components/main/Main'
import AppTheme from "./Colors";

const App = () => {

  const defaultTheme = useState(AppTheme.light);

  return (
    <div className="App">
      <ThemeContext.Provider value={defaultTheme}>
        <Header/>
        <Main/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
