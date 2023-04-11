import React, { useEffect,useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import themes from '../../styles/themes';
import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default class Layout extends React.Component {
  render() {
    const { selectedTheme, onToggleTheme} = this.props;

    return (
      <>
        <Header selectedTheme={selectedTheme} onToggleTheme={onToggleTheme}/>
        <PostsList />
        <Footer selectedTheme={selectedTheme} onToggleTheme={onToggleTheme}/>
      </>
    );
  }
}