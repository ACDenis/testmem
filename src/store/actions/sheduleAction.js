import { getToken } from "../../utils/utils";
import { fetchShedule, uploadSheldue } from "../api/api";
import { SET_SHEDULE } from "./actionTypes";

export const getShaduleActon = () => {
  return async (dispatch) => {
    try {
      const token = getToken();
      const response = await fetchShedule(token);
      if (response.status === 200) {
        dispatch({ type: SET_SHEDULE, shedule: response.data });
      }
    } catch (e) {
      return false;
    }
  };
};
export const createShaldueAction = (body) => {
  return async (dispatch) => {
    const token = getToken();
    const response = await uploadSheldue(body, token);
    return response.status === 200;
  };
};
