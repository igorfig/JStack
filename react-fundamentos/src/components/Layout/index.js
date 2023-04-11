import React, { useEffect,useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import themes from '../../styles/themes';
import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

<<<<<<< HEAD
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
=======
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
>>>>>>> 1ea681baec21a43aa69f8ecb3f33d19211bfc799
}
