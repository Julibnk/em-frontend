import styles from './styles.module.css';

import { Button, ButtonProps, ButtonVariant } from '@mantine/core';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useSelector } from '@store/store';

type Props = {
  to: string;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
};

// Define los estilos del componente botton en funcion de la variante
const getClassNames = (variant: ButtonVariant, collapsed: Boolean): {} => {
  if (variant === 'subtle') {
    return {
      root: `${styles.root} ${styles.subtle_root}`,
      inner: styles.inner,
      icon: `${styles.icon} ${styles.subtle_icon} ${
        !collapsed && styles.icon_collapsed
      }`,
    };
  }
  return {
    root: `${styles.root} ${styles.filled_root}`,
    inner: styles.inner,
    icon: `${styles.icon} ${!collapsed && styles.icon_collapsed}`,
  };
};

const NavBarMenuItem = ({ text, icon, className, to }: Props) => {
  const { navbarCollapsed } = useSelector((state) => state.layout);

  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const variant = match ? 'filled' : 'subtle';

  // Mantine Props
  const buttonProps: ButtonProps<typeof Link> = {
    fullWidth: navbarCollapsed,
    variant,
    leftIcon: icon,
    classNames: getClassNames(variant, navbarCollapsed),
    size: 'md',
    to,
  };

  return (
    <Button component={Link} className={className} {...buttonProps}>
      {navbarCollapsed && text}
    </Button>
  );
};

export default NavBarMenuItem;
