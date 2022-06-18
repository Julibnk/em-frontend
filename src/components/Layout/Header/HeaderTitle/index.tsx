import styles from './styles.module.css';
import { Title } from '@mantine/core';

export const HeaderTitle = () => {
  return (
    <Title className={styles.title} order={1}>
      HeaderTitle
    </Title>
  );
};
