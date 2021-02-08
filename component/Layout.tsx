import Navbar from './footer';
import Footer from './nav';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Head>
        <link
          href="//db.onlinewebfonts.com/c/961a181da27e7cbc072ec2fb5bbfe2a9?family=Circular+Std+Bold"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Footer />
      {children}
      <Navbar />
    </div>
  );
};
export default Layout;
