import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';

import * as search from './search.styled';
import initialState from './initialState';

const Search = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value.trim() };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (state.search.trim().toLowerCase() === '') {
      return toast.warn('Enter correct search!');
    }

    onSubmit(state.search);
    setState({ ...initialState });
  };

  const { query } = state;

  return (
    <search.Container>
      <search.Form onSubmit={handleSubmit}>
        <search.SearchButton type="submit" aria-label="search-button">
            <AiOutlineSearch />
        </search.SearchButton>
        <search.Input
          name="search"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          required
          onChange={handleChange}
        />
      </search.Form>
    </search.Container>
  );
};

export default memo(Search);

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
