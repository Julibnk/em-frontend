import styles from './styles.module.css';

import { Button, ButtonProps, ButtonVariant } from '@mantine/core';
// import { Button, ButtonProps, createStyles } from '@mantine/core';
import { useSelector } from '@store/store';

type Props = {
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

const NavBarMenuItem = ({
  text,
  icon,
  variant = 'subtle',
  className,
  onClick,
}: Props) => {
  const { navbarCollapsed } = useSelector((state) => state.layout);

  // Mantine Props
  const buttonProps: ButtonProps<'button'> = {
    fullWidth: navbarCollapsed,
    variant,
    leftIcon: icon,
    classNames: getClassNames(variant, navbarCollapsed),
    size: 'md',
  };

  return (
    <Button onClick={onClick} className={className} {...buttonProps}>
      {navbarCollapsed && text}
    </Button>
  );
};

export default NavBarMenuItem;
