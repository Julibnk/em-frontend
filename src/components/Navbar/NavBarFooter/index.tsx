import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Button } from '@mantine/core';
import { setNavbarCollapsed } from '@store/layout-slice';
import { useDispatch, useSelector } from '@store/store';
import NavBarMenuItem from '../NavBarMenuItem';

const NavBarFooter = () => {
  const dispatch = useDispatch();

  const { navbarCollapsed } = useSelector((state) => state.layout);

  const MessageIcon = <FontAwesomeIcon icon={faComment} />;

  const handleClick = () => {
    dispatch(setNavbarCollapsed(!navbarCollapsed));
  };

  return (
    <Navbar.Section>
      <NavBarMenuItem
        icon={MessageIcon}
        text='Estadisticas de uso'
        onClick={handleClick}
      />
      {/* <Button leftIcon={MessageIcon} variant='white' onClick={handleClick}>
        {navbarCollapsed && 'Collapse'}
      </Button> */}
    </Navbar.Section>
  );
};

export default NavBarFooter;
