import { useEffect, useState, Suspense } from 'react';
import API from 'services/moviesAPI';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useRef } from 'react';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [details, setDetails] = useState({});
  const [status, setStatus] = useState('fetch');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await API.details(movieId);
        setDetails(details);
        setStatus('finish');
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = details;
  const score = Math.trunc(vote_average * 10);
  const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    status === 'finish' && (
      <main>
        <div className={css.movie}>
          <div className={css.imgWrapper}>
            <Link to={backLinkLocationRef.current}>Go back</Link>
            <div>
              <img src={img} width="160" alt="" />
            </div>
          </div>
          <div>
            <h1>{title}</h1>
            <p>User Score: {score}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul className={css.genres}>
              {genres.map(({ id, name }) => (
                <li key={id} className={css.genre}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={css.additional}>Additional information</p>
        <ul className={css.additionalList}>
          <li>
            <Link to="cast" className={css.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.link}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading.....</div>}>
          <Outlet />
        </Suspense>
      </main>
    )
  );
};

export default MovieDetails;
