const express = require("express");
const mainControllers = require("../Controllers/mainControllers");
const mainRouters = express.Router();

mainRouters.get("/", mainControllers.mostrarHome);

mainRouters.get("/register", mainControllers.mostrarRegister);

mainRouters.get("/login", mainControllers.mostrarLogin);

module.exports = mainRouters;

