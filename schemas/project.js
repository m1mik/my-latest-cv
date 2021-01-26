const { gql } = require("apollo-server-express");
const { Movies } = require("../models/movies");
const Project = require("../models/project");

// const typeDefs = gql`
const typeDefs = `
  type Project {
    id: ID!
    name: String!
    duration: String!
    description: String!
    stack: [String]!
    responsibilities: [String]!
  }
  type Query {
    getProjects: [Project]
  }
  type Mutation {
    addProject(
      name: String!
      duration: String!
      description: String!
      stack: [String]!
      responsibilities: [String]!
    ): Project
    deleteProject(id: ID!): Project
  }
`;

const resolvers = {
  Query: {
    getProjects: async (parent, args) => {
      return await Movies.find({});
    },
  },
  Mutation: {
    addProject: async (parent, args) => {
      const { name, duration, description, stack, responsibilities } = args;
      const project = new Project({
        name,
        duration,
        description,
        stack,
        responsibilities,
      });
      return await project.save();
    },
    deleteProject: async (parent, args) => {
      if (!args.id) return;
      return await (await Project.findById(id)).deleteOne();
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
