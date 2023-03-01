
import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import debounce from "lodash.debounce";
import { fetchSearch } from "pages/services/services";
import { MovieList, ListItem } from "./Movies.styled";


import {
    SearchbarHeader,
    SearchForm,
    SearchButton,
    SearchSpan,
    SearchInput,
} from "./Movies.styled";
const Movies = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const searchPost = useMemo(() => {
    return debounce(searchMovie => {
      setSearchParams({ page: 1, searchMovie });
    }, 500);
  }, [setSearchParams]);

  const searchResult = e => {
    searchPost(e.target.value);
    setSearchMovie(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchMovie.trim() === '') {
      return alert(' You must enter a keyword');
    }
    setSearchParams({ query: searchMovie });
    setSearchMovie('');
  };
  // useEffect(() => {
  //   const movieRender = async () => {
  //     const { results } = await fetchSearch(searchQuery);
  //     if (results === 0) {
  //       alert ('Opps'); } setMovies(results);
  //   }; movieRender();
  //   }, [searchQuery]
  // );

  useEffect(() => {
    
    if (!searchQuery) {
      return ;
    }
    fetchSearch(searchQuery).then(setMovies);
  }, [searchQuery]);
  console.log(movies);

  return (
      <>
    <SearchbarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <label>
             <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchMovie}
          onChange={searchResult}
        />

          </label>
       <SearchButton type="submit">
          <SearchSpan>Search</SearchSpan>
        </SearchButton>
       
        </SearchForm>
         

      </SearchbarHeader>
      <>
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
        
      </>
      
  );
};

export default Movies;
