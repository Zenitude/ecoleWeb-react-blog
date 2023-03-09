import React from 'react';
import { LayoutContainer } from './Layout.style';
import Header from '../Header/Header';
import Router from '../Router/Router';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Router />
      <Footer />
    </LayoutContainer>
  )
}
