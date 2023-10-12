import Footer from 'components/layouts/Footer';
import Navbar from 'components/layouts/Navbar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
