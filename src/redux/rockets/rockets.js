const LOAD_ROCKETS = 'rocketstore/rocket/GET_ROCKETS';
const ADD_RESERVATION = 'rocketstore/rocket/ADD_RESERVATION';
const CANCEL_RESERVATION = 'rocketstore/rocket/CANCEL_RESERVATION';

const initialState = [];

// Define reducer
export default function reducer(state = initialState, action = {}) {
  const { id, rockets } = action;
  switch (action.type) {
    case ADD_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== id) { return rocket; }
        return { ...rocket, reserved: true };
      });
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== id) { return rocket; }
        return { ...rocket, reserved: false };
      });
    case LOAD_ROCKETS:
      return rockets.map((item) => ({
        id: item.id,
        name: item.rocket_name,
        details: item.description,
        imageUrl: item.flickr_images[0],
        reserved: false,
      }));
    default: return state;
  }
}

// Create actions
export function addReservation(id) {
  return { type: ADD_RESERVATION, id };
}

export function loadRockets(rockets) {
  return { type: LOAD_ROCKETS, rockets };
}

export function cancelReservations(id) {
  return { type: CANCEL_RESERVATION, id };
}

export const getFromServer = () => async (dispatch) => {
  const url = 'https://api.spacexdata.com/v3/rockets';
  const books = await fetch(`${url}`);
  const result = await books.json();
  dispatch(loadRockets(result));
};
