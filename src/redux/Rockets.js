import {
    GET_ROCKETS,
    SET_ROCKETS,
    SET_RESERVES,
    CANCEL_RESERVES,
  } from "../types";
  
  const initialState = { rockets: null };
  export default function rocketsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ROCKETS:
        return state;
      case SET_ROCKETS:
        return { ...state, rockets: action.payload };
      case SET_RESERVES:
        const newState = state.rockets.map((rocket) => {
          if (rocket.id !== action.payload) {
            return rocket;
          }
          return { ...rocket, reserved: true };
        });
        return { ...state, rockets: newState };
      case CANCEL_RESERVES:
        const newRocketsState = state.rockets.map((rocket) => {
          if (rocket.id !== action.payload) {
            return rocket;
          }
          return { ...rocket, reserved: false };
        });
        return { ...state, rockets: newRocketsState };
  
      default:
        return state;
    }
  }