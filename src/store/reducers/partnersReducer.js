import { DELETE_PARTNERS, SET_PARTNERS, SET_PARTNERS_IMG, SET_SINGLE_PARTNER } from "../actions/actionTypes";

const initialState = {
    partners: [],
    single: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PARTNERS:
            return { ...state, partners: action.partners }
        case SET_PARTNERS_IMG:
            return { ...state, gallery: action.gallery }
        case DELETE_PARTNERS:
            return {
                ...state,
                partners: state.partners.filter((partners) => partners._id !== action.id),
            };
            case SET_SINGLE_PARTNER:
                return { ...state, single: action.singlePartner };
        default:
            return state;
    }
}
