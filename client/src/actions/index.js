import axios from 'axios';

const WEB_DATA = 'https://raw.githubusercontent.com/ChaoTzuJung/ReactLab/master/src/containers/Home/webData.json';
// const API_KEY = '?key=ALAN0523';
export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {
  const request = axios.get(`${WEB_DATA}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
