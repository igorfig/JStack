import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Container } from './styles';

export default function Header() {
  const { theme, handleToggleTheme } = useTheme();
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        type="button" 
        onClick={handleToggleTheme}>
          {theme === 'dark' ? '🌞' : '🌚'}
        </button>
    </Container>
  );
}