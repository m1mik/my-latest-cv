const movie = require("./movies").resolvers;
const project = require("./project").resolvers;
const todo = require("./todo").resolvers;

module.exports = {
  Query: {
    ...movie.Query,
    ...project.Query,
    ...todo.Query,
  },
  Mutation: {
    ...movie.Mutation,
    ...project.Mutation,
    ...todo.Mutation,
  },
};
