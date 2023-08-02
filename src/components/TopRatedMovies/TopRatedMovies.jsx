import { Link, useLocation } from 'react-router-dom';
import css from './TopRatedMovies.module.css';
import PropTypes from 'prop-types';

const TopRatedMovies = ({ title, id }) => {
  const location = useLocation();

  return (
    <Link to={`movies/${id}`} state={{ from: location }} className={css.item}>
      {title}
    </Link>
  );
};

export default TopRatedMovies;

TopRatedMovies.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
