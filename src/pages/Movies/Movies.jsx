import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import API from 'services/moviesAPI';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';
  const [movie, setMovie] = useState(searchParams.get('name') ?? '');
  const [searchMovie, setSearchMovie] = useState([]);
  const location = useLocation();

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
        <ul>
          {searchMovie.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={`${id}`}
                state={{ from: location }}
                className={css.item}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Movies;
