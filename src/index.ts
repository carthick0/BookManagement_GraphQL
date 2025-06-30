import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema/typeDefs";

const prisma=new PrismaClient();



const server = new ApolloServer({
    typeDefs,
    resolvers
});

(async () => {
  const url = await startStandaloneServer(server, {
    context: async () => ({ prisma }),
    listen: { port: 2000 }
  });
})();

console.log("🚀 Server ready at http://localhost:2000");