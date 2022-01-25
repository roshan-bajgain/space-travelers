// const Missions = () => {};
export const JOIN_MISSION = "space/missions/JOINMISSION";
export const LOAD_MISSION = "space/missions/LOADMISSION";

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});
export const loadMission = (id) => ({
  type: LOAD_MISSION,
  payload: id,
});

export const newStateToJoinMission = (missions, id) => {
  const newState = missions.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return { ...mission, isReserved: true };
  });
  return newState;
};

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSION:
      return [...state, ...action.payload];
    case JOIN_MISSION:
      return newStateToJoinMission(state, action.payload);

    default:
      return state;
  }
};
export default missionReducer;
