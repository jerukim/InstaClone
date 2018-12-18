import axios from 'axios';

const GET_USER_POSTS = 'GET_USER_POSTS';
const GET_USER_FEED = 'GET_USER_FEED';

const gotUserPosts = posts => ({
  type: GET_USER_POSTS,
  posts,
});

const gotUserFeed = posts => ({
  type: GET_USER_FEED,
  posts,
});

export const getUserPosts = userId => async dispatch => {
  try {
    dispatch(gotUserPosts());
  } catch (err) {
    console.error(err);
  }
};

export const getUserFeed = userId => async dispatch => {
  try {
    const response = await axios({
      url: 'http://localhost:8080/graphql',
      method: 'post',
      data: {
        query: `
        query {
          getUserFeed(id: ${userId}) {
            path
            caption
            userId
          }
        }
          `,
      },
    });

    dispatch(gotUserFeed(response.data.data.getUserFeed));
  } catch (err) {
    console.error(err);
  }
};

const defaultState = {
  user: [],
  following: [],
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_USER_FEED:
      return {
        ...state,
        following: action.posts,
      };
    case GET_USER_POSTS:
      return;
    default:
      return state;
  }
}
