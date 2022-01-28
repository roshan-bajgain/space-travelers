import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import missionReducer from "./Missions";
import rocketsReducer from "./Rockets";

const reducers = combineReducers({
  missions: missionReducer,
  rockets: rocketsReducer,
});

const configureStore = createStore(reducers, applyMiddleware(logger, thunk));

export default configureStore;
