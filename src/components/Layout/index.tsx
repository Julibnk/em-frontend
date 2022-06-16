import styles from './styles';
import { createStyles } from '@mantine/core';
import Navbar from './Navbar';
import Content from './Content';

const useStyles = createStyles(styles);

const Layout = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Navbar />
      <Content />
    </div>
  );
};

export default Layout;
