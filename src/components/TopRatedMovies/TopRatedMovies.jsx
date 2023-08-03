import { Link, useLocation } from 'react-router-dom';
import css from './TopRatedMovies.module.css';

const TopRatedMovies = ({ movies = [] }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link
            to={`movies/${id}`}
            state={{ from: location }}
            className={css.item}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TopRatedMovies;
