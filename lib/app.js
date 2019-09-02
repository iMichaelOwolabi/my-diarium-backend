"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _schema = require("./schema/schema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _schema.typeDefs,
  resolvers: _schema.resolvers,
  introspection: true,
  playground: true
});
var app = (0, _express["default"])();
server.applyMiddleware({
  app: app
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("\uD83D\uDE80 my diarium running on http://localhost:".concat(port).concat(server.graphqlPath));
});
var _default = app;
exports["default"] = _default;