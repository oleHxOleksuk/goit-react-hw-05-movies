import { Outlet } from "react-router-dom";

import NavMenu from "components/NavMenu/NavMenu";

import {Container, Header} from './sharedLayout.styled'

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
