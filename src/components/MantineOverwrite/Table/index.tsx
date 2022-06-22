import { Table as MantineTable } from '@mantine/core';
import styles from './styles.module.css';

type ThAlign = 'left' | 'center' | 'end';

type ThProps = {
  children: React.ReactNode;
  align?: ThAlign;
};
type TdProps = {
  children?: React.ReactNode;
};
type TableProps = {
  children: React.ReactNode;
};

export const Th = ({ children, align = 'left' }: ThProps) => {
  return (
    <th style={{ textAlign: align }} className={styles.th}>
      {children}
    </th>
  );
};
export const Td = ({ children }: TdProps) => {
  return <td className={styles.td}>{children}</td>;
};

export const Table = ({ children }: TableProps) => {
  return (
    <MantineTable highlightOnHover className={styles.table}>
      {children}
    </MantineTable>
  );
};

// export default Table;
