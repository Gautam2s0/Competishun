import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {ResReducer} from "./Food/Recipe/ResReducer";
import {CalReducer} from "./Food/Calorie/CalReducer";
import {DietReducer} from "./Food/Diet/DiReducer"

const rootReducer = combineReducers({
  ResReducer,
  CalReducer,
  DietReducer
  });
  const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
  
  export { store };

