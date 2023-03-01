import { useState, useEffect } from 'react';
import {
  useLocation,
  useParams,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { FetchDetails } from 'pages/services/services';

import { ButtonBack, Detailsitem } from './MovieDetails.styled';

const MoVieDetalies = () => {
  const [details, setDetails] = useState('');
  const { detailId } = useParams();
  // обязательно имя Id должно совпадать в App с динамическим Id
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieIdDetails = await FetchDetails(detailId);
        setDetails(movieIdDetails);
      } catch (error) {
        console.log('🚀  error details', error);
      }
    };
    fetchData();

    // FetchDetails(detailId).then(setDetails); два варианта как получить данние бекенда
  }, [detailId]);

  const buttonBack = location.state?.from ?? '/';
  // const buttonBack = useRef(location.state?.from ?? '/'); два варианта кнопки назад через useRef и Link

  const {
    id,
    title,
    poster_path,
    overview,
    genres,
    release_date,
    vote_average,
  } = details;
  //  console.log(details); смотрим что дает бекенд и можно рендеридь

  return (
    <>
      {/* <GoBackBtn to={buttonBack.current}>Go back</GoBackBtn> */}
      <ButtonBack  to={buttonBack} type ="button">
         Back
      </ButtonBack>
      {details && (
        <>
          <div>
            <ul className=" p-5  col-9">
              <Detailsitem key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title}
                  width={250}
                />
              </Detailsitem>
            </ul>
            <h2>{`${title}(${release_date.slice(0, 4)})`}</h2>
            {/* удаляем slice все после 4 знака */}
            <p>{`User score: ${Math.round(vote_average * 10)}%`}</p>

            <h3>Overview</h3>
            <p> {overview}</p>
            <h3> Genres</h3>
            <p> {genres.map(genre => `${genre.name}`)}</p>
          </div>
          <div>
            <h2> Addition information</h2>

            <li>
              <NavLink to={`cast`} state={{ from: location.state?.from }}>
                {/* <NavLink to={`/movies/${detailId}/cast`} > */}
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${detailId}/reviews`}>Reviews</NavLink>
            </li>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};
export default MoVieDetalies;
