import {
  faComment,
  faAddressBook,
  faMessage,
  faChartBar,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBarMenuItem from '../NavBarMenuItem';

const CommentIcon = <FontAwesomeIcon icon={faComment} />;
const ContactIcon = <FontAwesomeIcon icon={faAddressBook} />;
const TemplateIcon = <FontAwesomeIcon icon={faMessage} />;
const StadisticsIcon = <FontAwesomeIcon icon={faChartBar} />;
const UserIcon = <FontAwesomeIcon icon={faUser} />;
const ConfigIcon = <FontAwesomeIcon icon={faGear} />;

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
      <NavBarMenuItem variant='filled' text='Mensajes' icon={CommentIcon} />
      <NavBarMenuItem text='Contactos' icon={ContactIcon} />
      <NavBarMenuItem text='Plantillas' icon={TemplateIcon} />
      <NavBarMenuItem text='Estadisticas de uso' icon={StadisticsIcon} />
      <NavBarMenuItem className='mt-auto' text='Perfil' icon={UserIcon} />
      <NavBarMenuItem text='Configuracion' icon={ConfigIcon} />
    </Navbar.Section>
  );
};

export default NavBarMenu;
