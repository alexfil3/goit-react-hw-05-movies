import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from 'services/moviesAPI';
import css from './Movies.module.css';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';
  const [movie, setMovie] = useState(searchParams.get('name') ?? '');
  const [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
    if (movie === '') return;

    const fetchMovies = async () => {
      try {
        const movies = await API.search(movie);
        setSearchMovie(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [movie]);

  const onSubmit = e => {
    e.preventDefault();
    setMovie(searchParams.get('name'));
  };

  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ name: movieIdValue });
    if (searchParams.get('name') === null) {
      setSearchMovie([]);
    }
  };

  return (
    <main>
      <form onSubmit={onSubmit} className={css.form}>
        <input
          type="text"
          value={query}
          onChange={updateQueryString}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      {searchMovie && searchParams.get('name') !== null && (
        <SearchMovieList searchMovie={searchMovie} />
      )}
    </main>
  );
};

export default Movies;
