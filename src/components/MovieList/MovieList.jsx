import { StyleList } from './MovieList.styled'

import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const MovieList = ({result}) => {
  const location = useLocation();
  const element = result.map(({id, title}) => (
    <li key={id}>
      <NavLink to={`/movies/${id}`}state={{ from: location }}>
        <p>{title}</p>
      </NavLink>
    </li>
  ));
  return <StyleList>{element}</StyleList>;
};

export default MovieList;

MovieList.defaultProps = {
  results: [],
};
