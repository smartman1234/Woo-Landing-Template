import Navbar from './footer';
import Footer from './nav';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Footer />
      {children}
      <Navbar />
    </div>
  );
};
export default Layout;
