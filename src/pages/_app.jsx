import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>
        <Navbar className="sticky top-0 z-100" />
        <div>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
