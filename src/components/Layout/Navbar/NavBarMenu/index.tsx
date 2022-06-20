import {
  faComment,
  faAddressBook,
  faMessage,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { Navbar } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBarMenuItem from '../NavBarMenuItem';
import { useTranslation } from 'react-i18next';

const CommentIcon = <FontAwesomeIcon icon={faComment} />;
const ContactIcon = <FontAwesomeIcon icon={faAddressBook} />;
const TemplateIcon = <FontAwesomeIcon icon={faMessage} />;
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
        to='/template'
        text={t('template', { count: 0 })}
        icon={TemplateIcon}
      />
      <NavBarMenuItem
        to='/profile'
        className='mt-auto'
        text={t('profile')}
        icon={UserIcon}
      />
    </Navbar.Section>
  );
};

export default NavBarMenu;
