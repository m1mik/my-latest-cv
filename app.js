const express = require("express");
const mongoose = require("mongoose");
// const movieSchema = require("./schemas/movies");
// const projectSchema = require("./schemas/project");
const combinedTypes = require("./schemas/gqlTypes");
const combinedResolvers = require("./schemas/gqlResolvers");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const userRouter = require("./modules/user/routes");
const fileUpload = require("express-fileupload");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
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
  typeDefs: combinedTypes,
  resolvers: combinedResolvers, // TODO: resolve issue: how to combine resolvers
});

const app = express();
app.use(bodyParser.json());
app.use("*", cors());
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(fileUpload());
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
