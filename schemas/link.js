const Link = require("../models/link");
const { composeWithMongoose } = require("graphql-compose-mongoose");
const customizationOptions = {};
const LinkTC = composeWithMongoose(Link, customizationOptions);

const linkQuery = {
  linkById: LinkTC.getResolver("findById"),
  linkByIds: LinkTC.getResolver("findByIds"),
  linkOne: LinkTC.getResolver("findOne"),
  linkMany: LinkTC.getResolver("findMany"),
  linkCount: LinkTC.getResolver("count"),
  linkConnection: LinkTC.getResolver("connection"),
  linkPagination: LinkTC.getResolver("pagination"),
};
const linkMutation = {
  linkCreateOne: LinkTC.getResolver("createOne"),
  linkCreateMany: LinkTC.getResolver("createMany"),
  linkUpdateById: LinkTC.getResolver("updateById"),
  linkUpdateOne: LinkTC.getResolver("updateOne"),
  linkUpdateMany: LinkTC.getResolver("updateMany"),
  linkRemoveById: LinkTC.getResolver("removeById"),
  linkRemoveOne: LinkTC.getResolver("removeOne"),
  linkRemoveMany: LinkTC.getResolver("removeMany"),
};

module.exports = {
  linkQuery,
  linkMutation,
};
