import axios from 'axios';

const API_KEY = '80a086833fbd610cb405c90094dba675';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query, page) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
      page: page
    }
  });
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY
    }
  });
  return response.data;
};
