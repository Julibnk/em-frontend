import styles from './styles.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from '@mantine/core';
import { setNavbarCollapsed } from '@store/layout-slice';
import { useDispatch, useSelector } from '@store/store';
import NavBarMenuItem from '../NavBarMenuItem';

// Accordion

const NavBarFooter = () => {
  const dispatch = useDispatch();

  const { navbarCollapsed } = useSelector((state) => state.layout);

  const MenuIcon = <FontAwesomeIcon icon={faBars} />;

  const handleClick = () => {
    dispatch(setNavbarCollapsed(!navbarCollapsed));
  };

  return (
    <Navbar.Section className={styles.root}>
      <NavBarMenuItem icon={MenuIcon} onClick={handleClick} />
    </Navbar.Section>
  );
};

export default NavBarFooter;
