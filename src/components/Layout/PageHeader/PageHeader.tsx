import styles from "./styles.module.css";

const PageHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>App</h1>
      </div>
      <div className={styles.headerRight}></div>
    </header>
  );
};

export default PageHeader;
