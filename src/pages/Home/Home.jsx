import { useEffect, useState } from 'react';
import API from 'services/moviesAPI';
import TopRatedMovies from 'components/TopRatedMovies/TopRatedMovies';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const trendMovies = await API.trand();
        setMovies(trendMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrend();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul className={css.list}>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <TopRatedMovies title={title} id={id} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
