const Project = require("../models/project");
const { composeWithMongoose } = require("graphql-compose-mongoose");
const customizationOptions = {};

const ProjectTC = composeWithMongoose(Project, customizationOptions);
const projectQuery = {
  projectById: ProjectTC.getResolver("findById"),
};

const projectMutation = {
  projectCreateOne: ProjectTC.getResolver("createOne"),
};

module.exports = {
  projectQuery,
  projectMutation,
};
