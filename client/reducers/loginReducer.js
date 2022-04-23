import * as types from '../constants/actionTypes';

const initialState = {
    loggedIn: false,
}

const loginReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.LOGIN:{
            return {
                ...state,
                loggedIn: true
            } 
        };
        case types.SIGNOUT:{
            return {
                ...state,
                loggedIn: false,
            }
        }
        default:{
            return state; 
        }
    }
}

export default loginReducer;