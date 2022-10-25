import { ApolloServer } from "@apollo/server";
import mongoose from 'mongoose'

import typeDefs from './graphql/typeDefs.js'
import resolvers from './graphql/resolvers'
import { MONGODB } from './config'