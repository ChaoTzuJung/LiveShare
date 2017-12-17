import axios from 'axios';
import querystring from 'querystring';
import { FETCH_USER } from './types';

//action creator
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const signInUser = params => async dispatch => {
  const { data } = await axios.post(
    '/api/signin',
    querystring.stringify(params)
  );
  console.log('signInUser', data);
};

export const signUpUser = params => async dispatch => {
  const { data } = await axios.post(
    '/api/signup',
    querystring.stringify(params)
  );
  console.log('signUpUser', data);
};



//當使用reduxthunk，createAtion的return會從一個request變成一個function，function內涵dispatch，他可以送出action