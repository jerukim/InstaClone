import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://localhost:8080',
});

const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

const defaultUser = {};

const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me');
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (login, password, method) => async dispatch => {
  console.log('got here', method);
  console.log('THUNK', login, password);
  let res;
  try {
    res = await ax.post(`/auth/${method}`, { login, password });
    // res = await fetch(`http://localhost:8080/auth/${method}`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });
    console.log('AUTH', res);
  } catch (authError) {
    console.log('AUTH ERROR', res);
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
