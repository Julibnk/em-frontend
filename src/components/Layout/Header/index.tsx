import styles from './styles.module.css';

import { HeaderTop } from '@components/Layout/Header/HeaderTop';
import { HeaderSubtitle } from './HeaderSubtitle';
import { HeaderTitle } from './HeaderTitle';
import { HeaderBar } from './HeaderBar/index';
export const Header = () => {
  return (
    <div className={styles.root}>
      <HeaderTop />
      <div>
        <HeaderTitle />
        <HeaderSubtitle />
      </div>
      <HeaderBar />
    </div>
  );
};
