import Layout from '@components/Layout';

import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from '../../config';

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ index, path, component: Component }, i) => {
          return (
            <Route
              key={i}
              index={index}
              path={path}
              element={
                <Suspense>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
