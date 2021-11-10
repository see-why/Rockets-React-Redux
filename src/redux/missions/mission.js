const LOAD_MISSIONS = 'space-travelers-hub/missions/LOAD_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';

const initialState = [];

export const loadMission = (missions) => ({
  type: LOAD_MISSIONS,
  payload: missions,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

const getMissions = async () => {
  const request = await fetch('https://api.spacexdata.com/v3/missions');
  const result = await request.json();
  return result;
};

export const loadMissions = () => async (dispatch) => {
  const getResult = await getMissions();
  const missions = getResult.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));
  if (missions) {
    dispatch(loadMission(missions));
  }
};

const missionsReducer = (state = initialState, action) => {
  const { payload: missions } = action;
  switch (action.type) {
    case LOAD_MISSIONS:
      return missions;
    case JOIN_MISSION:
      // onsole.log(missions);
      return state.map((mission) => {
        // console.log(`mission.id:  ${mission.id} id: ${missions}`);
        if (mission.id !== missions) {
          return { ...mission };
        }
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        // console.log(`mission.id:  ${mission.id} id: ${missions}`);
        if (mission.id !== missions) {
          return { ...mission };
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default missionsReducer;
