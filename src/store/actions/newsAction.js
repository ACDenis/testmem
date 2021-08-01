import { getToken } from "../../utils/utils";
import {
  createNews,
  deleteNews,
  fetchAllNews,
  fetchSingleNews,
  patchNews,
  uploadImageToNews,
} from "../api/api";
import {
  DELETE_ADV,
  DELETE_NEWS,
  SET_NEWS,
  SET_SINGLE_NEWS,
} from "./actionTypes";

export const fetchAllNewsActions = () => {
  return async (dispatch) => {
    try {
      const response = await fetchAllNews();
      if (response.status === 200) {
        dispatch({ type: SET_NEWS, news: response.data });
      }
      return response.status === 200;
    } catch (e) {
      return false;
    }
  };
};
export const getSingleNewsAction = (id) => {
  return async (dispatch) => {
    const response = await fetchSingleNews(id);
    dispatch({ type: SET_SINGLE_NEWS, singleNews: response.data });
  };
};

export const createNewsAction = (body, gallery) => {
  return async (dispatch) => {
    const token = getToken();
    const response = await createNews(body, token);
    dispatch({ type: SET_NEWS, news: response.data });
    if (!gallery || !response?.data) {
      return false;
    }
    if (response.status === 200) {
      const { id } = response.data;
      await uploadImageToNews(gallery, id, token);
      return true;
    }
    return response.status === 200;
  };
};

export const editNewsAction = (news, id, gallery) => {
  return async (dispatch) => {
    const token = getToken();
    const response = await patchNews(news, id, token);
    if (response.status === 200) {
      const id = response.data;
      await uploadImageToNews(gallery, id, token);
      return true;
    }
    return response.status === 200;
  };
};

export const deleteNewsAction = (id) => {
  return async (dispatch) => {
    const token = getToken();
    const response = await deleteNews(id, token);
    if (response.status === 200) {
      dispatch({
        type: DELETE_NEWS,
        id,
      });

      dispatch({
        type: DELETE_ADV,
        id,
      });
    }
    return response.status === 200;
  };
};
