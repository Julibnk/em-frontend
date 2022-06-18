import {
  faComment,
  faAddressBook,
  faMessage,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { Navbar } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBarMenuItem from '../NavBarMenuItem';

const CommentIcon = <FontAwesomeIcon icon={faComment} />;
const ContactIcon = <FontAwesomeIcon icon={faAddressBook} />;
const TemplateIcon = <FontAwesomeIcon icon={faMessage} />;
const UserIcon = <FontAwesomeIcon icon={faUser} />;

const NavBarMenu = () => {
  return (
    <Navbar.Section
      sx={{
        display: 'flex',
        gap: '0.8rem',
        flexDirection: 'column',
        borderBottom: '1px',
      }}
      grow
    >
      <NavBarMenuItem to='/' text='Mensajes' icon={CommentIcon} />
      <NavBarMenuItem to='/contact' text='Contactos' icon={ContactIcon} />
      <NavBarMenuItem to='/template' text='Plantillas' icon={TemplateIcon} />
      <NavBarMenuItem
        to='/profile'
        className='mt-auto'
        text='Perfil'
        icon={UserIcon}
      />
    </Navbar.Section>
  );
};

export default NavBarMenu;
