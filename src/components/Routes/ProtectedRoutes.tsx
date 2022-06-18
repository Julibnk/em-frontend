import Layout from '@components/Layout';

import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const ContactScreen = lazy(() => import('@views/ContactScreen'));
const MessageScreen = lazy(() => import('@views/MessageScreen'));
const ProfileScreen = lazy(() => import('@views/ProfileScreen'));
const TemplateScreen = lazy(() => import('@views/TemplateScreen'));
// const Dashboard = lazy(() => import('./pages/Dashboard'));

// import FullPageLoader from "@components/FullPageLoader/FullPageLoader";

interface SuspenseProps {
  children: React.ReactNode;
}

// const Suspense = ({ children }: SuspenseProps) => {
//   return (
//     <ReactSuspense fallback={<h1>Loading...</h1>}>{children}</ReactSuspense>
//   );
// };

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <Suspense>
              <MessageScreen />
            </Suspense>
          }
        ></Route>
        <Route
          path='contact/*'
          element={
            <Suspense>
              <ContactScreen />
            </Suspense>
          }
        ></Route>
        <Route
          path='template/*'
          element={
            <Suspense>
              <TemplateScreen />
            </Suspense>
          }
        ></Route>
        <Route
          path='profile/*'
          element={
            <Suspense>
              <ProfileScreen />
            </Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
