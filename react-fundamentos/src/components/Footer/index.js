import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export default class Footer extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
          {({ theme, handleToggleTheme }) => (
              <Container>
                <span>JStack's Blog. Todos os direitos reservados.</span>
                <button 
                  type="button" 
                  onClick={handleToggleTheme}>
                    {theme === 'dark' ? "🌞" : '🌚'}
                  </button>
              </Container>
          )}
      </ThemeContext.Consumer>  
    );
  }
}