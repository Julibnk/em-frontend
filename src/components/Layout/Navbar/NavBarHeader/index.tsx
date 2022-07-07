import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from '@mantine/core';
import NavBarMenuItem from '../NavBarMenuItem';

const Logo = <FontAwesomeIcon icon={faFontAwesome} />;

const NavBarHeader = () => {
  return (
    <Navbar.Section>
      <NavBarMenuItem
        to='/home'
        icon={Logo}
        text='EASYMESSAGE'
      ></NavBarMenuItem>
    </Navbar.Section>
  );
};

export default NavBarHeader;
