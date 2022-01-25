import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import missionReducer from "./Missions";

const reducers = combineReducers({
  missions: missionReducer,
});

const middlwares = [logger];

const configureStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlwares))
);

export default configureStore;
