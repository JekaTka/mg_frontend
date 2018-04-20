import { combineReducers } from 'redux';
import RegisterReducer from './modules/auth/register.reducers';
import LoginReducer from './modules/auth/login.reducers';

const reducers = combineReducers({
    register: RegisterReducer,
    login: LoginReducer,
});

export default reducers;
