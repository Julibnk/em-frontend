import styles from './styles.module.css';

import { Breadcrum } from './Breadcrum';
import { HeaderTopRight } from './HeaderTopRight';

const HeaderTop = () => {
  return (
    <div className={styles.root}>
      <Breadcrum />
      <HeaderTopRight />
    </div>
  );
};

export default HeaderTop;
