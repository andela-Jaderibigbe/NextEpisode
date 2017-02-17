import { isArray, } from 'underscore';
import {
  BASE_URL,
  API_KEY,
  IMAGE_URL,
  BASE_SERIES,
  BASE_MOVIE,
  TOP_RATED,
  POPULAR,
  LATEST,
  UPCOMING,
  SEARCH,
  AIRING_TODAY,
  FETCH_TOP_RATED_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_RATED_SERIES,
  FETCH_UPCOMING_SERIES,
  FETCH_POPULAR_SERIES
} from '../constants';

const getApiPath = (type, id) => {
  let url = null;

  switch (type) {
  case FETCH_TOP_RATED_MOVIES:
    url = `${BASE_MOVIE}/${TOP_RATED}`;
    break;
  case FETCH_UPCOMING_MOVIES:
    url = `${BASE_MOVIE}/${UPCOMING}`;
    break;
  case FETCH_POPULAR_MOVIES:
    url = `${BASE_MOVIE}/${POPULAR}`;
    break;
  case FETCH_TOP_RATED_SERIES:
    url = `${BASE_SERIES}/${TOP_RATED}`;
    break;
  case FETCH_UPCOMING_SERIES:
    url = `${BASE_SERIES}/${UPCOMING}`;
    break;
  case FETCH_POPULAR_SERIES:
    url = `${BASE_SERIES}/${POPULAR}`;
    break;
  default:
    url = '';
  }

  return `${BASE_URL}/${id ? `${url}/${id}` : `${url}`}?api_key=${API_KEY}`;
};

const computeImageUrl = path => `${IMAGE_URL}${path}`;

const NE_FIELDS = [
  'id',
  'name',
  'popularity',
  'overview',
  ['posterPath', 'poster_path' ],
  ['backdropPath', 'backdrop_path' ],
  ['voteAverage', 'vote_average' ],
  ['firstAirDate', 'first_air_date' ],
  ['originCountry', 'origin_country' ],
  ['genreIds', 'genre_ids' ],
  ['originalLanguage', 'original_language' ],
  ['voteCount', 'vote_count' ],
  ['imageUrl', 'poster_path', computeImageUrl]
];

const fieldParser = (input, field) => {
  const localKey = isArray(field) ? field[0] : field;
  const key = (isArray(field) && field.length > 1) ? field[1] : localKey;
  let value = input[key];
  if (isArray(field)) {
    let func = field[2];
    if (func !== undefined) {
      value = func(value);
    }
  }
  return { [localKey]: value };
};

const deserializeNE = (data) => {
  return NE_FIELDS
  .reduce((memo, field) => ({
    ...memo,
    ...fieldParser(data, field)
  }), {});
};

const fetchUrl = (url) => {
  return fetch(url)
  .then(res => res.json())
  .catch(err => {
    throw err;
  });
};

export const fetchList = (type) => {
  return new Promise((resolve, reject) => {
    const url = getApiPath(type);
    return fetchUrl(url)
    .then(res => {
      let { results } = res;
      results = results.map(deserializeNE);
      resolve({ ...res, results });
    })
    .catch(err => reject(err));
  });
};
