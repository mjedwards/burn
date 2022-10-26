// const eventsResolvers = require('./events')
import {gqlUserAuth} from './users'
// const tasksResolvers = require('./tasks')
// const miniTaskResolvers = require('./miniTask')


const queryMutation = {
    Query: {
    },
    Mutation: {
        ...gqlUserAuth.Mutation,
    },
}

export default queryMutation