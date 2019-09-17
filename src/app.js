import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { typeDefs, resolvers } from './schema/schema';
import auth from './authentication/auth';

dotenv.config();

const app = express();
const server = new ApolloServer({ typeDefs, resolvers, introspection: true,  playground: true, });
server.applyMiddleware({ app });

app.use(auth);
const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`🚀 my diarium running on http://localhost:${port}${server.graphqlPath}`)
);

export default app;
