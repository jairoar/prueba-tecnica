const app = require("./config/server");

const routes = require("./routes/routes.js");

routes(app);

//start server

app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto: ", app.get("port"));
});
