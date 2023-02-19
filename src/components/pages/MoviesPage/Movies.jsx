import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useMemo, useCallback } from "react";

import { Notify } from "notiflix";

import { fetchMovies } from "Api/api";

import Search from "components/Search/Search";
import MovieList from "components/MovieList/MovieList";

import Loader from "Shared/Loader/Loader";
import { PaginationStyle } from "Shared/PaginationStyle.styled";





const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { query, page } = params;
  const currentPage = Number(page) ? Number(page) : 1;
  const [totalPages, setTotalPages] = useState(0);
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    try {
      setLoading(true);
      const getMovie = async page => {
        const { results, total_pages } = await fetchMovies(page, query);
        if (!results.length) {
          Notify.failure('No found');
        } else {
          setTotalPages(total_pages);
          setMovie(results);
        }
      };
      getMovie(currentPage, query);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [query, currentPage, page]);

  const onSearchMovie = useCallback(
    query => {
      if (query !== searchQuery) {
        setSearchParams({ query, page: 1 });
        setMovie([]);
        setSearchQuery(query);
      } else {
        Notify.warning('you have already entered this query!');
      }
    },
    [setSearchParams, searchQuery]
  );

  const handlePageClick = e => {
    setSearchParams({ query, page: e.selected + 1 });
  };

  return (
    <main>
      <Search onSubmit={onSearchMovie} />
      <MovieList results={movie} />
      {error && <p>Error{error.message}</p>}
      {totalPages > 1 && (
        <PaginationStyle
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
          disabledLinkClassName="disabled"
          activeClassName="activePage"
          forcePage={currentPage - 1}
        />
      )}
      {loading && <Loader />}
    </main>
  );
};

export default Movies;
