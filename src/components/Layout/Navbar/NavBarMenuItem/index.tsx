import styles from './styles.module.css';

import { Button, ButtonProps } from '@mantine/core';
// import { Button, ButtonProps, createStyles } from '@mantine/core';
import { useSelector } from '@store/store';

// const useStyles = createStyles(() => {
//   return { inner: { justifyContent: 'flex-start' } };
// });

type Props = {
  text: string;
  icon?: React.ReactNode;
  className?: string;
};

const NavBarMenuItem = ({ text, icon, className }: Props) => {
  // const { classes } = useStyles();

  const { navbarCollapsed } = useSelector((state) => state.layout);

  console.log(styles);

  const buttonProps: ButtonProps<'button'> = {
    fullWidth: navbarCollapsed,
    variant: 'filled',
    leftIcon: icon,
    classNames: {
      inner: styles.inner,
      icon: `${!navbarCollapsed && styles.iconCollapsed}`,
    },
  };

  return (
    <Button className={className} {...buttonProps}>
      {navbarCollapsed && text}
    </Button>
  );
};

export default NavBarMenuItem;
