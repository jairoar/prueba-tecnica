const express = require("express");
var cors = require("cors");

const app = express(); //Inicializacion del servidor

app.set("port", process.env.PORT || 4000);

//Middlewares(Para recibir facilmente la informacion de los formularios)
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

module.exports = app;
