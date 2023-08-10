import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from '../styles/loading.module.css';
import '../styles/globals.css';
import PageExitAnimation from '../components/PageExitAnimation';
import PageEnterAnimation from '../components/PageEnterAnimation';

function App({ Component, pageProps }) {

  return (
    <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
    </>
  );
}

export default App;
