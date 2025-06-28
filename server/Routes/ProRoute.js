const express = require("express");
const route =express.Router();
const ProController = require("../Controller/ProController");

route.get("/home", ProController.Homepage);
route.get("/about", ProController.Aboutpage);
route.get("/insert", ProController.Insertpage);
route.get("/display", ProController.Displaypage);
route.post("/save", ProController.RegistractionUser);





module.exports = route;