const { mergeTypeDefs } = require("@graphql-tools/merge");
const moviesTypes = require("./movies").typeDefs;
const projectTypes = require("./project").typeDefs;
const todoTypes = require("./todo").typeDefs;

const types = [moviesTypes, projectTypes, todoTypes];

module.exports = mergeTypeDefs(types);
