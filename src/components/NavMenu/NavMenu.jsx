import {StyledLink, NavStyled} from './navMenu.styled'

const NavMenu = () => {
  return (
    <NavStyled>
      <StyledLink to="/" end>Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </NavStyled>
  );
};

export default NavMenu;
