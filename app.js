const express = require("express");
const mongoose = require("mongoose");
const schema = require("./schema");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const userRouter = require("./modules/user/routes");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const url = `mongodb+srv://cv-user:${process.env.db_password}@cv-gen-cluster.v38xk.mongodb.net/cv-db?retryWrites=true&w=majority`;
const connect = mongoose.connect(url, { useNewUrlParser: true });
connect.then(
  (db) => {
    console.log("Connected correctly to server!");
  },
  (err) => {
    console.log(err);
  }
);

const server = new ApolloServer({
  typeDefs: [schema.typeDefs],
  resolvers: [schema.resolvers],
});

const app = express();
app.use(bodyParser.json());
app.use("*", cors());
app.use(express.static(path.join(__dirname, "./client/build")));
app.use("/user", userRouter);
app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "./client/public", "index.html"));
});

app.get("/health", (req, res) => {
  return res.status(200).json({ message: "i'm alive" });
});

server.applyMiddleware({ app });
app.listen(PORT, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
