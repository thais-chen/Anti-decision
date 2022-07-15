import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
      );
}

export default Layout ;