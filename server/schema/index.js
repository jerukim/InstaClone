const { gql } = require('apollo-server-express');
const { find } = require('lodash');

const {
  userData,
  postData,
  likeData,
  commentData,
  relationshipData,
} = require('../../script/seed/seed');

const typeDefs = gql`
  type User {
    name: String
    username: String!
    website: String
    bio: String
    email: String
    followers: Int
    following: Int
    posts: [Post]
    postCount: Int
    #profile picture
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
    users: [User]
    user(id: Int!): User
    post(id: Int!): [Post]
  }
`;

const resolvers = {
  Query: {
    users: () => userData,
    user: async (parent, args, { dataSources }, info) => {
      const user = await dataSources.userAPI.getUser(args.id);
      return user;
    },
    post(parent, args, context, info) {
      return find(postData, { id: args.id });
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
