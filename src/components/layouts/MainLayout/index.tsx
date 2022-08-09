import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import ScrollToTop from '../../ScrollToTop';
import './MainLayout.scss';

export interface MainLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

export default function MainLayout({ children = null }: MainLayoutProps) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />

      <ScrollToTop />
    </>
  );
}
