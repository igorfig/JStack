import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {ThemeContext} from '../../contexts/ThemeContext';

import { Container } from './styles';

export default function Header() {
  const history = useHistory();

  function handleNavigate() {
    history.push('/')
  }

  return(
    <ThemeContext.Consumer>
        {({ theme, handleToggleTheme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button 
              type="button" 
              onClick={handleToggleTheme}>
              {theme === 'dark' ? '🌞' : '🌚'}
            </button>

            <button onClick={handleNavigate} style={{ color: '#fff' }}>Voltar para a home</button>
          </Container>
        )}
    </ThemeContext.Consumer>
  )
}

/*export default class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, handleToggleTheme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button 
              type="button" 
              onClick={handleToggleTheme}>
              {theme === 'dark' ? '🌞' : '🌚'}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}*/