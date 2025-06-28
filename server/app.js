const express = require("express");
const app  = express();
const bodyParser = require("body-parser");
const hbs = require('hbs')
const path = require('path');
const sequelize = require('./config/database');
const ProRoute = require("./Routes/ProRoute");
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

sequelize.sync().then(async () => {
    console.log("Database Conntected!");
});









app.use("/Product", ProRoute);

app.listen(8000, ()=>{
    console.log("Server is running on 8000 port");
})