import * as types from "./actionTypes";

export const login = (userInfo) => ({
    type: types.LOGIN,
    userInfo
});