import { Navbar } from '@mantine/core';

import NavBarFooter from './NavBarFooter';
import NavBarHeader from './NavBarHeader';
import NavBarMenu from './NavBarMenu';

import styles from './styles.module.css';

const CustomNavbar = () => {
  const navbarProps = {
    classNames: {
      root: styles.root,
    },
  };

  return (
    <Navbar {...navbarProps}>
      <NavBarHeader />
      <NavBarMenu />
      <NavBarFooter />
    </Navbar>
  );
};

export default CustomNavbar;
