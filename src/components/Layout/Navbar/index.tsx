import { createStyles, Navbar } from "@mantine/core";

import styles from "./styles";

const useStyles = createStyles(styles);

const CustomNavbar = () => {
  const { classes } = useStyles();
  // useStyles()

  return (
    <Navbar classNames={{ root: classes.root }}>
      <Navbar.Section grow>
        <h1>Header</h1>
      </Navbar.Section>
      <Navbar.Section grow>
        <h1>Items</h1>
      </Navbar.Section>
      <Navbar.Section>
        <h1>Footer</h1>
      </Navbar.Section>
    </Navbar>
  );
};

export default CustomNavbar;
