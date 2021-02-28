const { composeWithMongoose } = require("graphql-compose-mongoose");
const customizationOptions = {};
const User = require("./index");
const UserTC = composeWithMongoose(User, customizationOptions);
const userQuery = {
  todoById: UserTC.getResolver("findById"),
};

const userMutation = {
  todoCreateOne: UserTC.getResolver("createOne"),
};

module.exports = {
  userQuery,
  userMutation,
};
