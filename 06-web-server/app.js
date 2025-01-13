const express = require("express");
const app = express();
const port = 8080;

// TODO: require('hbs');
app.set("view engine", "hbs");

// app.use(express.json()); // Middleware para parsear JSON

// Servir contenido estatico
app.use(express.static("public"));

// esta linea no se ejecuta si se sirve el contenido estatico
// app.get("/", function (req, res) {
//   res.send("Home page");
// });

// app.get("/hola-mundo", function (req, res) {
//   res.send("Hello World route");
// });

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Christopher Taylor",
    titulo: "Curso de Node",
  });
});

app.get("/generic", function (req, res) {
  res.sendFile(__dirname + "/public/back/template/generic.html");
});

app.get("/elements", function (req, res) {
  res.sendFile(__dirname + "/public/back/template/elements.html");
});

app.get("/*", function (req, res) {
  // res.sendFile(__dirname + "/public/404.html");
  res.sendFile(__dirname + "/public/back/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
