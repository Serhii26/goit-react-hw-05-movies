import axios from "axios";
const BASE_KEY = `7b77c4dcb5d2a82b7ee985358575ab56`;
export const fetchTrending = async () => {
    
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${BASE_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
};


export const fetchSearch = async search => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${BASE_KEY}&query=${search}&language=en-US&page=1&include_adult=false`;
    const response = await axios.get(url);
    return response.data.results;
};

export const FetchDetails = async id => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${BASE_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
};

export const fetchCredits = async movie_id => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${BASE_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data.cast;
};

export const fetchReviews = async movie_id => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${BASE_KEY}&language=en-US&page=1`;
    const response = await axios.get(url);
    return response.data.results;
};
