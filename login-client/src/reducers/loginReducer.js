import initialState from "./initialState";
import * as types from "../actions/actionTypes";

const loginReducer = (state = initialState, { type, id, nickname }) => {
    switch (type) {
        case types.LOGIN : 
            return { id: id, nickname: nickname};
    default:
        return state;
    }
}

export default loginReducer;