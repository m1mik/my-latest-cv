const Movie = require("../models/movies").Movies;
const { composeWithMongoose } = require("graphql-compose-mongoose");
const customizationOptions = {};

const MovieTc = composeWithMongoose(Movie, customizationOptions);
const movieQuery = {
  movieById: MovieTc.getResolver("findById"),
};

const movieMutation = {
  movieCreateOne: MovieTc.getResolver("createOne"),
};

module.exports = {
  movieQuery,
  movieMutation,
};
