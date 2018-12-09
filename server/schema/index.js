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
  }
`;

const resolvers = {
  Query: {
    users: () => userData,
    user(parent, args, context, info) {
      return find(userData, { id: args.id });
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
