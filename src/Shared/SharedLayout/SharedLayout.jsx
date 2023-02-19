import { Outlet } from "react-router-dom";

import NavMenu from 'componets/NavMenu/NavMenu';

import { Container, Header } from "./sharedLayout";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <NavMenu />
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
