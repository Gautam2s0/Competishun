import {DIET_GET_REQUEST,DIET_GET_SUCCESS,DIET_GET_FAILED} from "./DiActionTypes";
  const initalData = {
    recipes: [],
    isError: false,
    isLoading: false,
  };
  export const DietReducer = (state = initalData, { type, payload }) => {
    switch (type) {
      case DIET_GET_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case DIET_GET_SUCCESS:
        return {
          ...state,
          recipes: payload,
          isLoading: false,
        };
      case DIET_GET_FAILED:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };
  