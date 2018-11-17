import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_ATTENDANCE } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({type: FETCH_USER, payload: res.data });
};

export const fetchAttendance = () => async dispatch => {
  axios.defaults.headers.post['crossDomain'] = true;
  const res = await axios.post('https://cors-anywhere.herokuapp.com/http://fierce-savannah-23542.herokuapp.com/Attendance?requestType=getHistory&lectureID=ABCD', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    },
    data: {

    }
  });

  dispatch({ type: FETCH_ATTENDANCE, payload: res.data });
};
