import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs/index"


const server = new ApolloServer({ typeDefs,resolvers });

startStandaloneServer(server, {
  listen: { path: "/graphql", port: 4000 },
}).then(({ url }) => {
  console.log(`Server is up and running at ${url}graphql`)
});

