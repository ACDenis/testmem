import {
  SET_SHEDULE, SET_SHEDULE_FILE,
} from "../actions/actionTypes";

const initialState = {
  shedule: ""
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SHEDULE:
      return {
        ...state,
        shedule: action.shedule,
      };
    case SET_SHEDULE_FILE:
      return {
        ...state,
        sheldueFile: action.sheldueFile
      }
    default:
      return state;
  }
};
