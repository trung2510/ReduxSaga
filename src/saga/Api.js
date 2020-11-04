const axios = require('axios').default;

const url = 'https://reactnative.dev/movies.json';

function* getMoviesFromApi() {

  const response = yield axios({
    method: 'get',
    url: url,
    timeout: 3000,
  });
  

  const movies = yield response.status === 200 ? response.data.movies : [];

  console.log(movies);
  
  return movies;
}

export const Api = {
  getMoviesFromApi
};