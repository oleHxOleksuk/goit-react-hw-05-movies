import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage';

import { fetchCredits } from 'Api/api';

import {CastList, CastItem,ActorInfoWrap} from './cast.styled'

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchCredits(movieId);
        setMovieCast(cast);
      } catch ({ response }) {
        setError(true);
      }
    };
    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      {error && <NotFoundPage />}
      {movieCast.length ? (
        <CastList>
          {movieCast.slice(0, 12).map(actor => (
            <CastItem key={actor.cast_id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : `https://via.placeholder.com/200`
                }
                alt={`${actor.name}`}
              />
              <ActorInfoWrap>
                <p>{actor.name}</p>
                <p>
                  Character:
                  <span>{actor.character}</span>
                </p>
              </ActorInfoWrap>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default MovieCast;
