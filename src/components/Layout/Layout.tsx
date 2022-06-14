import styles from "./styles";
import { createStyles } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const useStyles = createStyles(() => styles);

const Layout = () => {
  const { classes } = useStyles();

  return (
    <main className={classes.main}>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
