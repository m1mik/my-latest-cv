const mongoose = require("mongoose");
const Todo = require("../models/todo");

const typeDefs = `
  type Todo {
    id: ID!
    title: String!
    owner: String!
    isDone: Boolean
    description: String
    created_at: String!
    done_at: String
  }
  type Query {
    getTodos(ownerId: ID!): [Todo]
  }
  type Mutation {
    addTodo(
      title: String!, owner: ID!, description: String, isDone: Boolean
    ): Todo
    toggleTodo(id: ID!): Todo
  }
`;

const resolvers = {
  Query: {
    getTodos: async (parent, args) => {
      const todos = await Todo.find({
        owner: mongoose.Types.ObjectId(args.ownerId),
      }).exec();
      return todos;
    },
  },
  Mutation: {
    addTodo: async (parent, args) => {
      const todo = new Todo(args);
      await todo.save();
      return todo;
    },
    toggleTodo: async (parent, args) => {
      const todo = await Todo.findById(args.id).exec();
      todo.isDone = !todo.isDone;
      if (todo.isDone) todo.done_at = new Date().toISOString();
      await todo.save();
      return todo;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
