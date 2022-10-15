import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '@components/Layout';
import { routes } from '../../config';

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ path, component: Component }, i) => {
          return (
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

        <Route path='/*' element={<Navigate to='home'></Navigate>}></Route>
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
