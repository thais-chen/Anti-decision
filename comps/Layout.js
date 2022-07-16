import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Navbar.module.css"

 

const Layout = ({children}) => {
    return (
        <div>
            <Navbar className={styles.navFlex} />
            {children}
            <Footer />
        </div>
      );
}

export default Layout ;