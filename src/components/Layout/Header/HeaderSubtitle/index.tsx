import styles from './styles.module.css';
import { Title } from '@mantine/core';

export const HeaderSubtitle = () => {
  return (
    <Title className={styles.title} order={4}>
      Subtitulo
    </Title>
  );
};
