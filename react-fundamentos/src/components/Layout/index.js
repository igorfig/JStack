import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Nav } from './styles';

import themes from '../../styles/themes';
import Header from '../Header';
import Routes from '../../routes';
import Footer from '../Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/posts/id">Post</Link>
        </Nav>  
        <Routes />
        <Footer />
      </BrowserRouter>
    );
  }
}