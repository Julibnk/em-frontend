import { Navbar } from "@mantine/core";

const CustomNavbar = () => {
  return (
    <Navbar width={{ sm: "20rem" }}>
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
