import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  onAboutClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onAboutClick }) => {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar onAboutClick={onAboutClick} />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
