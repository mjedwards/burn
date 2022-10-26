import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose'

import {gqlTypes} from './graphql/typeDefs.js'
import resolvers from './graphql/resolvers'
import { MONGODB } from './config.js'

const server = new ApolloServer({
    typeDefs: gqlTypes,
    resolvers,
})

mongoose.connect(MONGODB).then(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
      });
      
      console.log(`🚀  Server ready at: ${url}`);
})