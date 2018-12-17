const { gql } = require('apollo-server-express');
const { find } = require('lodash');

const typeDefs = gql`
  type User {
    name: String
    username: String!
    website: String
    bio: String
    email: String
    followersCount: Int
    followingCount: Int
    posts: [Post]
    postCount: Int
    profilePhoto: String
  }

  type Post {
    path: String!
    caption: String
  }

  type Like {
    count: Int!
  }

  type Comment {
    text: String
  }

  type Query {
    userById(id: Int!): User
    postsByUserId(id: Int!): [Post]
    getUserFeed(id: Int!): [Post]
  }
`;

const resolvers = {
  Query: {
    userById: async (parent, args, { dataSources }, info) => {
      try {
        const userDataPromise = dataSources.userAPI.getUserData(args.id);
        const userPostsPromise = dataSources.postAPI.getUserPosts(args.id);

        const [userData, userPosts] = await Promise.all([
          userDataPromise,
          userPostsPromise,
        ]);
        userData.posts = userPosts;
        return userData;
      } catch (err) {
        console.error(err);
      }
    },
    postsByUserId: async (parent, args, { dataSources }, info) => {
      try {
        const userPosts = await dataSources.postAPI.getUserPosts(args.id);
        return userPosts;
      } catch (err) {
        console.error(err);
      }
    },
    getUserFeed: async (parent, args, { dataSources }, info) => {
      try {
        const userFeed = 'something';
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
