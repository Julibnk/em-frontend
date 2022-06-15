import { initApp } from "@store/auth-slice";
import { useDispatch } from "@store/store";
import { useLayoutEffect } from "react";

const useInitApp = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(initApp("develop"));
  }, [dispatch]);
};

export default useInitApp;
