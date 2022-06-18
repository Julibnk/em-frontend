// import { Suspense, lazy } from "react";
// import { Suspense } from "react";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

// import FullPageLoader from "@components/FullPageLoader/FullPageLoader";
// import PublicRoutes from "@components/Routes/PublicRoutes";
import ProtectedRoutes from '@components/Routes/ProtectedRoutes';
import PrivateRoutes from '@components/Routes/PrivateRoutes';

// const LoginPage = lazy(() => import("@views/Login/LoginPage"));
// const NotFoundComponent = lazy(
//   () => import("@components/Routes/NotFoundComponent")
// );

function AppRouter() {
  return (
    <Router>
      {/* <Suspense fallback={<FullPageLoader />}> */}
      {/* <Suspense> */}
      <Routes>
        {/* <Route path="/" element={<PublicRoutes />}>
            <Route path="login/*" element={<h1></h1>} />
          </Route> */}

        <Route element={<PrivateRoutes />}>
          <Route path='/*' element={<ProtectedRoutes />} />
        </Route>

        {/* <Route path="*">
            <Route element={<NotFoundComponent />} />
          </Route> */}
      </Routes>
      {/* </Suspense> */}
    </Router>
  );
}

export default AppRouter;
