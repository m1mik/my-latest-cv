const { SchemaComposer } = require("graphql-compose");
const { todoQuery, todoMutation } = require("./todo");
const { linkQuery, linkMutation } = require("./link");
const { userQuery, userMutation } = require("../modules/user/model/schema");
const { projectQuery, projectMutation } = require("./project");
const capaSchemaComposer = new SchemaComposer();
capaSchemaComposer.Query.addFields({
  ...todoQuery,
  ...userQuery,
  ...projectQuery,
  ...linkQuery,
});
capaSchemaComposer.Mutation.addFields({
  ...todoMutation,
  ...userMutation,
  ...projectMutation,
  ...linkMutation,
});
const graphqlSchema = capaSchemaComposer.buildSchema();
module.exports = graphqlSchema;
