import { Button, ButtonProps, createStyles } from '@mantine/core';
import { useSelector } from '@store/store';

const useStyles = createStyles(() => {
  return { inner: { justifyContent: 'flex-start' } };
});

type Props = {
  text: string;
  icon?: React.ReactNode;
};

const NavBarMenuItem = ({ text, icon }: Props) => {
  const { classes } = useStyles();

  const { navbarCollapsed } = useSelector((state) => state.layout);

  const buttonProps: ButtonProps<any> = {
    fullWidth: navbarCollapsed,
    variant: 'gradient',
    leftIcon: icon,
    classNames: { inner: classes.inner },
  };

  return <Button {...buttonProps}>{navbarCollapsed && text}</Button>;
};

export default NavBarMenuItem;
