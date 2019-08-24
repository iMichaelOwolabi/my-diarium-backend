import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    welcome: String
  }
`;
 
const resolvers = {
  Query: {
    welcome: () => 'Welcome to My Diarium, where your memories lives!',
  },
};

export {
  typeDefs,
  resolvers
}