import styles from './styles.module.css';
import { Title } from '@mantine/core';

import { routes } from '../../../../config';

import { Routes, Route } from 'react-router-dom';

const HeaderTitle = () => {
  return (
    <Routes>
      {routes.map(({ path, title }, i) => {
        return (
          <Route
            key={i}
            path={path}
            element={
              <Title className={styles.title} order={1}>
                {title}
              </Title>
            }
          />
        );
      })}
    </Routes>
  );
};

export default HeaderTitle;
