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

console.log(routes);

const HeaderSubtitle = () => {
  // return <h1>Hola</h1>;
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
