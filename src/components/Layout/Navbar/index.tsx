import { Navbar } from '@mantine/core';
// import { useSelector } from '@store/store';

import NavBarFooter from './NavBarFooter';
import NavBarHeader from './NavBarHeader';
import NavBarMenu from './NavBarMenu';

import styles from './styles.module.css';

const CustomNavbar = () => {
  // const { navbarCollapsed } = useSelector((state) => state.layout);

  const navbarProps = {
    classNames: {
      // root: `${styles.root} ${!navbarCollapsed && styles.root_collapsed}`,
      root: `${styles.root}`,
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
