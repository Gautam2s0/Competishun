import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {ResReducer} from "./RecipeStore/ResReducer"
const rootReducer = combineReducers({
  ResReducer
  });
  const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
  
  export { store };

