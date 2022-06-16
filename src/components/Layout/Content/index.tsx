import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';

const PageContent = () => {
  return (
    <main className={styles.content}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
  );
};

export default PageContent;
