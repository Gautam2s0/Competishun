import {
    CAL_GET_REQUEST,
    CAL_GET_SUCCESS,
    CAL_GET_FAILED,
  } from "./CalActionType";
  
  const initalData = {
    recipes: [],
    isError: false,
    isLoading: false,
  };
  export const CalReducer = (state = initalData, { type, payload }) => {
    switch (type) {
      case CAL_GET_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case CAL_GET_SUCCESS:
        return {
          ...state,
          recipes: payload,
          isLoading: false,
        };
      case CAL_GET_FAILED:
        return {
          ...state,
          isError: true,
        };
      default:
        return state;
    }
  };
  