import * as types from '../constants/actionTypes';


// action for login
export const clientLogin = () => ({
    type: types.LOGIN,
});

// action for signout or signoff
export const clientSignout = () => ({
    type: types.SIGNOUT,
});

