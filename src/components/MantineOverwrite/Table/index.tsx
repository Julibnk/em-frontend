import { Table } from '@mantine/core';
import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

const CustomTable = ({ children }: Props) => {
  return (
    <Table highlightOnHover className={styles.table}>
      {children}
    </Table>
  );
};

export default CustomTable;
