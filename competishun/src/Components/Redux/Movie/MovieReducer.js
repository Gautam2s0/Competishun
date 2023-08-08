import {
  MOVIE_GET_REQUEST,
  MOVIE_GET_SUCCESS,
  MOVIE_GET_FAILED,
} from "./MovieActionType";

const initalData = {
  movies: [],
  watchlist: [],
  favourites: [],
  isError: false,
  isLoading: false,
};
export const MovieReducer = (state = initalData, { type, payload }) => {
  switch (type) {
    case MOVIE_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case MOVIE_GET_SUCCESS:
      return {
        ...state,
        movies: payload,
        isLoading: false,
      };
    case MOVIE_GET_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
