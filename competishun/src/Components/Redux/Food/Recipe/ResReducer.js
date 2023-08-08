import {
  RES_GET_REQUEST,
  RES_GET_SUCCESS,
  RES_GET_FAILED,
} from "./ResActionType";

const initalData = {
  recipes: [],
  isError: false,
  isLoading: false,
};
export const ResReducer = (state = initalData, { type, payload }) => {
  switch (type) {
    case RES_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case RES_GET_SUCCESS:
      return {
        ...state,
        recipes: payload,
        isLoading: false,
      };
    case RES_GET_FAILED:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
