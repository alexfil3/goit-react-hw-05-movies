import { useEffect, useState } from 'react';
import API from 'services/moviesAPI';
import TopRatedMovies from 'components/TopRatedMovies/TopRatedMovies';

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
      <TopRatedMovies movies={movies} />
    </main>
  );
};

export default Home;
