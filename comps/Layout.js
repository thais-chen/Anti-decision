import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return <div className={styles.layoutSize}>{children}</div>;
};

export default Layout;
