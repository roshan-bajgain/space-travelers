export const JOIN_MISSION = "space/missions/JOINMISSION";
export const LOAD_MISSION = "space/missions/LOADMISSION";
export const LEAVE_MISSION = "space/missions/LEAVE_MISSION";

const URL = "https://api.spacexdata.com/v3/missions";

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});
export const loadMission = (id) => ({
  type: LOAD_MISSION,
  payload: id,
});
export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const fetchAllMissions = async () => {
  const response = await fetch(URL);
  return response.json();
};

export const getMissions = () => async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  const missionArr = [];
  data.forEach((m) => {
    const mission = {
      mission_id: m.mission_id,
      mission_name: m.mission_name,
      mission_description: m.description,
    };
    missionArr.push(mission);
  });
  dispatch(loadMission(missionArr));
};

// export default getMissions;

export const missionsSelector = (state) => state.missions;

export const newStateToJoinMission = (missions, id) => {
  const newState = missions.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return { ...mission, isReserved: true };
  });
  return newState;
};
export const newStateToLeaveMission = (missions, id) => {
  const newState = missions.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return { ...mission, isReserved: false };
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
    case LEAVE_MISSION:
      return newStateToLeaveMission(state, action.payload);
    default:
      return state;
  }
};
export default missionReducer;
