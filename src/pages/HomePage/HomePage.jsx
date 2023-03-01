import { fetchTrending } from 'pages/services/services';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ListItem, MovieList, HomeTitle } from './HomePage.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <>
      <HomeTitle className="df p-4  col-9">Trending today</HomeTitle>
      <MovieList>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <ListItem state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </ListItem>
            </li>
          );
        })}
      </MovieList>
    </>
  );
};
export default Home;
