"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const resolvers_1 = require("./graphql/resolvers");
const index_1 = require("./graphql/typeDefs/index");
const server = new server_1.ApolloServer({ typeDefs: index_1.typeDefs, resolvers: resolvers_1.resolvers });
(0, standalone_1.startStandaloneServer)(server, {
    listen: { path: "/graphql", port: 4000 },
}).then(({ url }) => {
    console.log(`Server is up and running at ${url}graphql`);
});
