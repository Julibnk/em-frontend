import styles from './styles.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionIcon, ActionIconProps, Navbar } from '@mantine/core';
import { setNavbarCollapsed } from '@store/layout-slice';
import { useDispatch, useSelector } from '@store/store';

const NavBarFooter = () => {
  const dispatch = useDispatch();

  const { navbarCollapsed } = useSelector((state) => state.layout);

  const handleClick = () => {
    dispatch(setNavbarCollapsed(!navbarCollapsed));
  };

  const actionIconProps: ActionIconProps<'button'> = {
    variant: 'filled',
    size: 'xl',
    color: 'turquoise',
    onClick: handleClick,
  };

  return (
    <Navbar.Section className={styles.root}>
      <ActionIcon {...actionIconProps}>
        <FontAwesomeIcon icon={faBars} />
      </ActionIcon>
    </Navbar.Section>
  );
};

export default NavBarFooter;
