import styles from './styles.module.css';
import Navbar from './Navbar';
import Main from './Main';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Main />
    </div>
  );
};

export default Layout;
