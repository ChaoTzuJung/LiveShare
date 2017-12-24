import axios from 'axios';
import { FETCH_VIDEO } from './types';

export const fetchVideo = () => async dispatch => {
  const res = await axios.get('./course');
  
  dispatch({ type: FETCH_VIDEO, payload: res.data });
}