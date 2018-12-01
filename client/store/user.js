import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://localhost:8080',
});

const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

const defaultUser = {};

const getUser = user => ({ type: GET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me');
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (username, password, method) => async dispatch => {
  let res;
  try {
    res = await ax.post(`/auth/${method}`, { username, password });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout');
    dispatch(removeUser());
  } catch (err) {
    console.error(err);
  }
};

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
