import {
  faComment,
  faAddressBook,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { Navbar } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBarMenuItem from '../NavBarMenuItem';
import { useTranslation } from 'react-i18next';
import { faGear, faHouse } from '@fortawesome/free-solid-svg-icons';

const HomeIcon = <FontAwesomeIcon icon={faHouse} />;
const CommentIcon = <FontAwesomeIcon icon={faComment} />;
const ContactIcon = <FontAwesomeIcon icon={faAddressBook} />;
const ConfigurationIcon = <FontAwesomeIcon icon={faGear} />;
const UserIcon = <FontAwesomeIcon icon={faUser} />;

const NavBarMenu = () => {
  const { t } = useTranslation();

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
      <NavBarMenuItem to='/home' text={t('home')} icon={HomeIcon} />
      <NavBarMenuItem
        to='/message'
        text={t('message', { count: 0 })}
        icon={CommentIcon}
      />
      <NavBarMenuItem
        to='/contact'
        text={t('contact', { count: 0 })}
        icon={ContactIcon}
      />
      <NavBarMenuItem
        to='/configuration'
        className='mt-auto'
        text={t('configuration', { count: 0 })}
        icon={ConfigurationIcon}
      />
      <NavBarMenuItem to='/profile' text={t('profile')} icon={UserIcon} />
    </Navbar.Section>
  );
};

export default NavBarMenu;
