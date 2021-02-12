import Navbar from './footer';
import Footer from './nav';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Head>
         <link rel="preconnect" href="https://fonts.gstatic.com"/>
      </Head>
      <Footer />
      {children}
      <Navbar />
    </div>
  );
};
export default Layout;
