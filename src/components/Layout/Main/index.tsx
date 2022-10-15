import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Main = () => {
  return (
    <main>
      <div className={styles.main_container}>
        <Header />
        <div className={styles.sub_container}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Main;
