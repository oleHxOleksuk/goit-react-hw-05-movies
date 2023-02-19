import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage';

import { fetchReviews } from 'Api/api';

import {ReviewList, ReviewAutorName} from './MovieRewiewers.styled'

const MovieRewiewers = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async id => {
      try {
        const { results } = await fetchReviews(movieId);
        setReviews(results);
      } catch ({ response }) {
        setError(true);
        console.log(response.data.message);
      }
    };
    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
    {error && <NotFoundPage />}
    {reviews.length ? (
      <ReviewList>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <div>
              <ReviewAutorName>{author}</ReviewAutorName>
              <p>{content}</p>
            </div>
          </li>
        ))}
      </ReviewList>
    ) : (
      <p>No results</p>
    )}
  </>
  );
};

MovieRewiewers.defaultProps = [];

MovieRewiewers.propTypes = {
  id: PropTypes.number,
  autor: PropTypes.string,
  content:PropTypes.string,
}


export default MovieRewiewers;
