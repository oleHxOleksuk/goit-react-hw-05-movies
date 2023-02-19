import { StyledList, MovieLink } from './MovieList.styled'

import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom'

const MovieList = ({result}) => {
  const location = useLocation();
  const element = result.map(({id, title}) => (
    <li key={id}>
      <MovieLink to={`/movies/${id}`}state={{ from: location }}>
        <p>{title}</p>
      </MovieLink>
    </li>
  ));
  return <StyledList>{element}</StyledList>;
};

export default MovieList;

MovieList.defaultProps = {
  results: [],
};

MovieList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })),
};
