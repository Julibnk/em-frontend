import Layout from '@components/Layout';

import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from '../../config';

console.log(routes);

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ index, path, component: Component }, i) => {
          return index ? (
            <Route
              key={i}
              index
              element={
                <Suspense>
                  <Component />
                </Suspense>
              }
            />
          ) : (
            <Route
              key={i}
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
