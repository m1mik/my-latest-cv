const movieResolvers = require("./movies").resolvers;
const projectResolvers = require("./project").resolvers;

module.exports = {
    Query: {
        ...movieResolvers.Query,
        ...projectResolvers.Query,
    },
    Mutation: {
        ...movieResolvers.Mutation,
        ...projectResolvers.Mutation,
    }
}