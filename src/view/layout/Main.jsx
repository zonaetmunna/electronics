import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/main/footer/Footer';
import Navbar from '../components/main/header/Navbar';

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
      
    </>
  );
};

export default Main;