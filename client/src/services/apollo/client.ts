import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { todosVar } from "./variables/todo";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read() {
            return todosVar();
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
