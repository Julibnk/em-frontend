import React from 'react';
import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

export const BadgeCell = ({ children }: Props) => {
  return <div className={styles.badge}>{children}</div>;
};

export const ActionCell = ({ children }: Props) => {
  return <div className={styles.action}>{children}</div>;
};
