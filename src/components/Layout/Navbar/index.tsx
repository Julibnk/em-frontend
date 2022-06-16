import { Button, createStyles, Navbar } from '@mantine/core';
import { useState } from 'react';

import styles from './styles';

const useStyles = createStyles(styles);

const CustomNavbar = () => {
  const { classes } = useStyles();

  const [collapsed, setCollapsed] = useState(true);

  const navbarProps = {
    classNames: { root: `${classes.root} ${collapsed && classes.collapsed}` },
  };

  return (
    <Navbar {...navbarProps}>
      <Navbar.Section grow>
        <Button
          variant="outline"
          onClick={() => setCollapsed((state) => !state)}
        >
          Hola
        </Button>
        <h1>Header</h1>
      </Navbar.Section>
      <Navbar.Section grow>
        <h1>Items</h1>
      </Navbar.Section>
      <Navbar.Section>
        <h1>Footer</h1>
      </Navbar.Section>
    </Navbar>
  );
};

export default CustomNavbar;
