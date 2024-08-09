const express = require("express");
const morgan = require("morgan");
const routes = require("../src/api/endpoints");
require("dotenv").config();
const cors = require("cors");

// Configuración inicial
const app = express();
app.set("port", 4000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET"],
  })
);
app.use(morgan("dev"));

// Usar rutas
app.use("/", routes);

// Rutas
app.get("/", (req, res) => {
  res.send("Bienvenido a la raíz del servidor");
});



app.listen(app.get("port"));
console.log("Escuchando comunicaciones en el puerto: " + app.get("port"));
