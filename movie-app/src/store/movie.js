import { Store } from '../core';

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  isLoading: false,
  message: '영화 제목으로 검색해 주세요.',
});

export default store;

export const searchMovies = async (page) => {
  store.state.isLoading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = '';
  }
  try {
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
    );
    const { Search, totalResults, Response, Error } = await res.json();
    if (Response === 'True') {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
      store.state.pageMax = 1;
    }
  } catch (err) {
    console.error(err);
    store.state.message = err.message;
  } finally {
    store.state.isLoading = false;
  }
};
