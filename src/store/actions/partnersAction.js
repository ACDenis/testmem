import { getToken } from "../../utils/utils";
import { createPartners, deletePartners, fetchPartners, fetchSinglePartners, patchPartners, uploadImageToPartners } from "../api/api";
import { SET_PARTNERS, DELETE_PARTNERS, SET_SINGLE_PARTNER } from "./actionTypes";

export const fetchPartnersAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetchPartners()
      if (response.status === 200) {
        dispatch({ type: SET_PARTNERS, partners: response.data })
      }
      return response.status === 200
    } catch (error) {
      return false
    }
  }
}
export const createPartnersAction = (body, gallery) => {
  return async (dispatch) => {
    const token = getToken()
    const response = await createPartners(body, token)
    dispatch({ type: SET_PARTNERS, partners: response.data })
    if (response.status === 200) {
      const {createPartner: {_id: id}} = response.data
      await uploadImageToPartners(gallery, id, token)
      return true
    }
    return response.status === 200;
  }
}

export const editPartnersAction = (partners,id, gallery) => {
  return async (dispatch) => {
    const token = getToken()
    const response = await patchPartners(partners,id, token)
    dispatch({ type: SET_PARTNERS, partners: response.data.partner })
    if (response.status === 200) {
      const { editPartner: { _id: id } } = response.data
      await uploadImageToPartners(gallery, id, token)
      return true
    }
    return response.status === 200
  }
}


export const getSinglePartnersAction = (id) => {
  return async (dispatch) => {
    const response = await fetchSinglePartners(id);
    dispatch({type: SET_SINGLE_PARTNER, singlePartner: response.data.partner});
  };
};

export const deletePartnersAction = (id) => {
  return async (dispatch) => {
    const token = getToken();
    const response = await deletePartners(id, token);
    if (response.status === 200) {
      dispatch({
        type: DELETE_PARTNERS,
        id,
        partners: response.data
      });
    }
    return response.status === 200;
  };
};
