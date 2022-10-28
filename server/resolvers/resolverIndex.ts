import gqlUserAuth from './users.js'


const queryMutation = {
    Query: {
    },
    Mutation: {
        ...gqlUserAuth.Mutation,
    },
}

export default queryMutation