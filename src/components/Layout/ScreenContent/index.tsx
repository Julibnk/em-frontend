import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

export const ScreenContent = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>;
};
