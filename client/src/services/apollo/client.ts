import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { todosVar, todoListControllerVar } from "./variables/todo";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read() {
            return todosVar();
          },
        },
        todoListController: {
          read() {
            return todoListControllerVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  // uri: "http://localhost:4000/graphql",
  uri: "https://my-latest-cv.herokuapp.com/graphql",
  cache,
});

export default client;
