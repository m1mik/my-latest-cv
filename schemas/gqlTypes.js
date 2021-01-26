const { mergeTypeDefs } = require('@graphql-tools/merge');
const moviesTypes = require("./movies").typeDefs;
const projectTypes = require("./project").typeDefs;

const types = [
    moviesTypes,
    projectTypes
]

module.exports = mergeTypeDefs(types) 