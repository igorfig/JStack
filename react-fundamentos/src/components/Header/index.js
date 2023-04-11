import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Container } from './styles';

<<<<<<< HEAD
export default class Header extends React.Component {
  render() {
    const { selectedTheme, onToggleTheme } = this.props;
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button 
          type="button" 
          onClick={onToggleTheme}>
            {selectedTheme === 'dark' ? '🌞' : '🌚'}
          </button>
      </Container>
    );
  }
=======
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
>>>>>>> 1ea681baec21a43aa69f8ecb3f33d19211bfc799
}