const express = require("express");
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const Task = require("./models/Task");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const MONGODB = "mongodb+srv://sarrarhouma:sarramongo@cluster0.fwesrp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB Connection successful");
        return server.listen({ port: 5000 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    });
