import React from 'react';
import { About } from '../components/About/About';
import { Navbar } from '../components/Navbar/Navbar';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
};

export default HomePage;
