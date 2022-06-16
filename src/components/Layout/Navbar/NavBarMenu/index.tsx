import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBarMenuItem from '../NavBarMenuItem';

const MessageIcon = <FontAwesomeIcon icon={faCoffee} />;
const ContactIcon = <FontAwesomeIcon icon={faCoffee} />;
const TemplateIcon = <FontAwesomeIcon icon={faCoffee} />;

const NavBarMenu = () => {
  return (
    <Navbar.Section sx={{ display: 'flex', flexDirection: 'column' }} grow>
      {/* {/* <h1>Items</h1> */}
      <NavBarMenuItem text="Mensajes" icon={MessageIcon} />
      <NavBarMenuItem text="Contactos" icon={MessageIcon} />
      <NavBarMenuItem text="Plantillas" icon={MessageIcon} />
      <NavBarMenuItem text="Estadisticas de uso" icon={MessageIcon} />
    </Navbar.Section>
  );
};

export default NavBarMenu;
