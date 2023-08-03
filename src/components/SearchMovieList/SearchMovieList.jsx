import css from './SearchMovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const SearchMovieList = ({ searchMovie }) => {
  const location = useLocation();

  return (
    <ul>
      {searchMovie.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${id}`} state={{ from: location }} className={css.item}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchMovieList;
