import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema/schema';

const server = new ApolloServer({ typeDefs, resolvers, introspection: true,  playground: true, });

const app = express();
server.applyMiddleware({ app });

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`🚀 my diarium running on http://localhost:${port}${server.graphqlPath}`)
);

export default app;
