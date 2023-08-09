import {
  MOVIE_GET_REQUEST,
  MOVIE_GET_SUCCESS,
  MOVIE_GET_FAILED,
  MOVIE_ADD_FAVORITE_REQUEST,
  MOVIE_ADD_FAVORITE_SUCCESS,
  MOVIE_ADD_FAVORITE_FAILED,
  MOVIE_ADD_WATCHLIST_REQUEST,
  MOVIE_ADD_WATCHLIST_SUCCESS,
  MOVIE_ADD_WATCHLIST_FAILED,
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAILED
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
        isError:false
      };
    case MOVIE_GET_SUCCESS:
      return {
        ...state,
        movies: payload,
        isLoading: false,
        isError:false
      };
    case MOVIE_GET_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case MOVIE_ADD_FAVORITE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case MOVIE_ADD_FAVORITE_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case MOVIE_ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        favourites:[...state.favourites,payload],
        isLoading: false,
        isError: false,
      };
    case MOVIE_ADD_WATCHLIST_REQUEST:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case MOVIE_ADD_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist:[...state.watchlist,payload],
        isLoading: false,
        isError: false,
      };
      case MOVIE_ADD_WATCHLIST_FAILED:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
        case MOVIE_SEARCH_REQUEST:
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
          
            case MOVIE_SEARCH_SUCCESS:
              return {
                ...state,
                movies:payload,
                isLoading: false,
                isError: true,
              };
              case MOVIE_SEARCH_FAILED:
                return {
                  ...state,
                  isLoading: false,
                  isError: true,
                };
    default:
      return state;
  }
};
