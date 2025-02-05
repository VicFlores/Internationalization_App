import React from 'react';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default HomePage;
