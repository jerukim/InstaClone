import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://localhost:8080',
});

const GET_USER = 'GET_USER';
const GET_USER_DATA = 'GET_USER_DATA';
const REMOVE_USER = 'REMOVE_USER';

const defaultUser = {};

// AUTH
const getUser = user => ({ type: GET_USER, user });
const getUserData = userData => ({ type: GET_USER_DATA, userData });
export const removeUser = () => ({ type: REMOVE_USER });

export const me = () => async dispatch => {
  console.log('ME THUNK');
  try {
    const res = await axios.get('/auth/me');
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (
  method,
  username,
  password,
  email,
  name
) => async dispatch => {
  console.log('AUTH THUNK');
  let res;
  try {
    res = await ax.post(`/auth/${method}`, { username, password, email, name });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    return dispatch(getUser(res.data));
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
// --------------

export const fetchUserData = userId => async dispatch => {
  try {
    const userData = await axios({
      url: 'http://localhost:8080/graphql',
      method: 'post',
      data: {
        query: `
        query {
          getUserDataById(id: ${userId}) {
            username
            profilePhoto
            name
            bio
            website
            postCount
            followers
            following
          }
        }
          `,
      },
    });
    dispatch(getUserData(userData.data.data.userById));
  } catch (err) {
    console.error(err);
  }
};

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case GET_USER_DATA:
      return { ...state, ...action.userData };
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
