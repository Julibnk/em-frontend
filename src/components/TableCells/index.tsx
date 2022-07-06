import React from 'react';
import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};
type CellWithSubtitleProps = {
  title: string;
  subtitle: string;
};

export const BadgeCell = ({ children }: Props) => {
  return <div className={styles.badge}>{children}</div>;
};

export const ActionCell = ({ children }: Props) => {
  return <div className={styles.action}>{children}</div>;
};

export const CellWithSubtitle = ({
  title,
  subtitle,
}: CellWithSubtitleProps) => {
  return (
    <>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
    </>
  );
};
