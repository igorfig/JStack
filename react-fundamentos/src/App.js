import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider } from './hooks/useTheme';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import themes from './styles/themes/'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  function handleSetCurrentTheme(theme) {
    setCurrentTheme(theme);
  }

  useEffect(() => console.log(currentTheme), [currentTheme]);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <ThemeContextProvider>
        <Layout  setCurrentTheme={handleSetCurrentTheme}/>
      </ThemeContextProvider> 
    </ThemeProvider>
  );
};

export default App;
