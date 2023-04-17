import React, { useEffect,useMemo } from 'react';
import themes from '../../styles/themes';
import Header from '../Header';
import Routes from '../../routes';
import Footer from '../Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Routes />
        <Footer />
      </>
    );
  }
}