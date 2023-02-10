import React, { useEffect,useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import themes from '../../styles/themes';
import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ setCurrentTheme }) {
  const { theme } = useTheme();

  const currentTheme = useMemo(() => {
    return themes[theme];
  }, [theme]);

  useEffect(() => setCurrentTheme(currentTheme), [currentTheme])
  return (
    <>
      <Header />
      <PostsList />
      <Footer />
    </>
  );
}
