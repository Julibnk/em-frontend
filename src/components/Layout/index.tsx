import styles from './styles.module.css';
import Navbar from './Navbar';
import Content from './Content';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Content />
    </div>
  );
};

export default Layout;
