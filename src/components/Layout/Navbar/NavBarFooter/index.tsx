import { Navbar, Button } from '@mantine/core';
import { setNavbarCollapsed } from '@store/layout-slice';
import { useDispatch, useSelector } from '@store/store';

const NavBarFooter = () => {
  const dispatch = useDispatch();

  const { navbarCollapsed } = useSelector((state) => state.layout);

  const handleClick = () => {
    dispatch(setNavbarCollapsed(!navbarCollapsed));
  };

  return (
    <Navbar.Section>
      <Button variant="white" onClick={handleClick}>
        Hola
      </Button>
    </Navbar.Section>
  );
};

export default NavBarFooter;
