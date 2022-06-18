import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
