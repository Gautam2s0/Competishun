import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {ResReducer} from "./Food/Recipe/ResReducer";
import {CalReducer} from "./Food/Calorie/CalReducer";
import {DietReducer} from "./Food/Diet/DiReducer";
import {MovieReducer} from "./Movie/MovieReducer"

const rootReducer = combineReducers({
  ResReducer,
  CalReducer,
  DietReducer,
  MovieReducer
  });
  const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
  
  export { store };

