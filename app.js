const express = require("express");
const mongoose = require("mongoose");
const combinedTypes = require("./schemas/gqlTypes");
const combinedResolvers = require("./schemas/gqlResolvers");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const userRouter = require("./modules/user/routes");
const fileUpload = require("express-fileupload");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const url =
  PORT === 4000
    ? `mongodb://127.0.0.1:27017/localCvDb`
    : `mongodb+srv://cv-user:${process.env.db_password}@cv-gen-cluster.v38xk.mongodb.net/cv-db?retryWrites=true&w=majority`;
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
app.use(cookieParser());
app.use("*", cors());
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(fileUpload());
app.use("/user", userRouter);
app.get("/health", (req, res) => {
  return res.cookie("test", "value").status(200).json({ message: "i'm alive" });
});

app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "./client/public", "index.html"));
});

server.applyMiddleware({ app });
app.listen(PORT, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
