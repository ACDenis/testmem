import {
  DELETE_NEWS,
  SET_NEWS,
  SET_NEWS_IMG,
  SET_SINGLE_NEWS,
} from "../actions/actionTypes";

const initialState = {
  news: [],
  single: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.news,
      };
    case SET_NEWS_IMG:
      return {
        ...state,
        gallery: action.gallery,
      };

    case SET_SINGLE_NEWS:
      return { ...state, single: action.singleNews };
    case DELETE_NEWS:
      return {
        ...state,
        news: state.news.filter((news) => news._id !== action.id),
      };
    default:
      return state;
  }
};
