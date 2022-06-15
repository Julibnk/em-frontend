import styles from "./styles.module.css";

const PageContent = ({ children }) => {
  return <main className={styles.content}>{children}</main>;
};

export default PageContent;
