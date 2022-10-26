"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const mongoose_1 = __importDefault(require("mongoose"));
const typeDefs_js_1 = require("./graphql/typeDefs.js");
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const config_js_1 = require("./config.js");
const server = new server_1.ApolloServer({
    typeDefs: typeDefs_js_1.gqlTypes,
    resolvers: resolvers_1.default,
});
mongoose_1.default.connect(config_js_1.MONGODB).then(async () => {
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
});
