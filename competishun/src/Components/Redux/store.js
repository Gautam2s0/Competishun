import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {ResReducer} from "./Food/Recipe/ResReducer";
import {CalReducer} from "./Food/Calorie/CalReducer"
const rootReducer = combineReducers({
  ResReducer,
  CalReducer
  });
  const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
  
  export { store };

