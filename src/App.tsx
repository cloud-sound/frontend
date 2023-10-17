import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Header from 'components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
