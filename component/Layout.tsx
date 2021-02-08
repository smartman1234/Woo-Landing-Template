import Navbar from './footer';
import Footer from './nav';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Head>
        <link
          rel="preload"
          href="/CircularStd-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Footer />
      {children}
      <Navbar />
    </div>
  );
};
export default Layout;
