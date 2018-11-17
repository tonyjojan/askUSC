import { combineReducers } from 'redux';
import authReducer from './authReducer';
import attendanceReducer from './attendanceReducer';

export default combineReducers({
  auth: authReducer,
  attendance: attendanceReducer
});
