import {DELETE_ADV, SET_ADV} from "../actions/actionTypes";

const initialState = {adv: []}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ADV:
      return {...state, adv: action.adv}
    default:
      return state;
    case DELETE_ADV:
      return {
        ...state,
        adv: state.adv.filter((adv) => adv._id !== action.id),
      };
  }
}
