// import styles from './styles.module.css';
// import { Title } from '@mantine/core';

// export const HeaderSubtitle = () => {
//   return (
//     <Title className={styles.title} order={4}>
//       Subtitulo
//     </Title>
//   );
// };

import styles from './styles.module.css';
import { Title } from '@mantine/core';

import { routes } from '../../../../config';

import { Routes, Route } from 'react-router-dom';

const HeaderSubtitle = () => {
  return (
    <Routes>
      {/* <Route path='/*'> */}
      {routes.map(({ path, subtitle }, i) => {
        return (
          <Route
            key={i}
            path={path}
            element={
              <Title className={styles.title} order={4}>
                {subtitle}
              </Title>
            }
          />
        );
      })}
      {/* </Route> */}
    </Routes>
  );
};

export default HeaderSubtitle;
