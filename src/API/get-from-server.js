import axios from 'axios';
import { CONSTS } from './consts';

function generateOption(addURL, params) {
  return {
    method: 'GET',
    url: `${CONSTS.URL}/${addURL}`,
    params,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${CONSTS.BEARER}`,
    },
  };
}

async function axiosGet(options) {
    const response = await axios.request(options);
    return response.data;
}

//============================================================================
export async function getTrendingAllDay(page = 1, language = 'en-US') {
  const options = generateOption('trending/all/day', { language, page });
  return axiosGet(options);
}
//============================================================================
export async function getTrendingAllWeek(page = 1, language = 'en-US') {
  const options = generateOption('trending/all/week', { language, page });
  return axiosGet(options);
}

//============================================================================
export async function getSearchMovie({
  query = 'qqq',
  language = 'en-US',
  include_adult = false,
  primary_release_year = '',
  page = 1,
  region = '',
  year = '',
}) {
  const options = generateOption('search/movie', {
    language,
    query,
    include_adult,
    primary_release_year,
    page,
    region,
    year,
  });
  return axiosGet(options);
}
//============================================================================
export async function getMovieDetails(movie_id, language = 'en-US') {
  const options = generateOption(`movie/${movie_id}`, { language });
  return axiosGet(options);
}
//============================================================================
export async function getMovieCredits(movie_id, language = 'en-US') {
  const options = generateOption(`movie/${movie_id}/credits`, { language });
  return axiosGet(options);
}

//============================================================================
export async function getMovieReviews(movie_id, language = 'en-US', page = 1) {
  const options = generateOption(`movie/${movie_id}/reviews`, { language, page });
  return axiosGet(options);
}

export async function getMovieVideos(movie_id, language = 'en-US') {
  const options = generateOption(`movie/${movie_id}/videos`, { language });
  return axiosGet(options);
}

export async function getGenreMovieList(language = 'en-US') {
  const options = generateOption('genre/movie/list', { language });
  return axiosGet(options);
}

export async function getMovieUpcoming(page = 1, language = 'en-US') {
  const options = generateOption('movie/upcoming', { language, page });
  return axiosGet(options);
}

//additional functions
export async function getLanguages() {
  const options = generateOption('configuration/languages', {});
  return axiosGet(options);
}