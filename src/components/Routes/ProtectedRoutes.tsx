import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./Routes";
// import FullPageLoader from "@components/FullPageLoader/FullPageLoader";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={`/projects`} />} />

      <Suspense>
        {routes.map(({ component: Component, layout: Layout, path, exact }) => {
          return (
            <Route path={`/${path}`} element={<Component />} key={path}>
              <Layout>
                <Component />
              </Layout>
            </Route>
          );
        })}
      </Suspense>
    </Routes>
  );
};

export default ProtectedRoutes;
