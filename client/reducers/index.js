import { combineReducers } from "redux";
import loginReducer from './loginReducer'

const reducers = combineReducers({
    loginStatus: loginReducer
});


export default reducers;