// const eventsResolvers = require('./events')
import userResolvers from './users'
// const tasksResolvers = require('./tasks')
// const miniTaskResolvers = require('./miniTask')


const queryMutation = {
    Query: {
    },
    Mutation: {
        ...userResolvers.Mutation,
    },
}

export default queryMutation