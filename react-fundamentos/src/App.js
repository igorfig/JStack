import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider } from './hooks/useTheme';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import themes from './styles/themes/'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark'
    };

    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }

  handleToggleTheme() {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }))
  }

  render() {
    const { theme } = this.state;

    console.log(this.state);

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout selectedTheme={theme}  onToggleTheme={this.handleToggleTheme} />
      </ThemeProvider>
    );
  }
}
export default App;
