const express = require("express");
const mongoose = require("mongoose");
const schema = require("./schema");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images" });
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
app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "./client/public", "index.html"));
});

app.get("/health", (req, res) => {
  return res.status(200).json({ message: "i'm alive" });
});

app.post("/upload", upload.single("photo"), (req, res) => {
  if (req.file) res.json(req.file);
  res.status(400).json({
    message: "Something went wrong on file save.",
  });
});

server.applyMiddleware({ app });
app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
