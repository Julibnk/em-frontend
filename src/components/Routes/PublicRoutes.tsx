import { useSelector } from "@store/store";
import { Navigate, Outlet } from "react-router-dom";

export interface ILocationState {
  from: { pathname?: string; search?: string };
}

const PublicRoutes = () => {
  // const location = useLocation();

  const { isAuthenticated } = useSelector((state) => state.auth);

  // const { from } = (location.state as ILocationState) || {
  //   from: { pathname: "/", search: "" },
  // };

  // const redirectLocation = `${from.pathname as string}${from.search as string}`;

  return isAuthenticated ? (
    // <Navigate replace to={redirectLocation} />
    <Navigate replace to="/" />
  ) : (
    <Outlet />
  );
};

export default PublicRoutes;
