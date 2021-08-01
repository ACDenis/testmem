import { getToken } from "../../utils/utils"
import { deleteAdv, fetchAdv } from "../api/api"
import { DELETE_ADV, SET_ADV } from "./actionTypes"

export const fetchAdvAction = () => {
    return async (dispatch) => {
        try {
            const response = await fetchAdv()
            if (response.status === 200) {
                dispatch({ type: SET_ADV, adv: response.data })
            }
            return response.status === 200;
        } catch (error) {
            return false
        }
    }
}

export const deleteAdvActions = (id) => {
    return async (dispatch) => {
        try {
            const token = getToken()
            const response = await deleteAdv(id, token)
            if (response.status === 200) { dispatch({ type: DELETE_ADV, id }) }
            return response.status === 200
        } catch (error) {
            return false
        }
    }
}