const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

const base = 2;

crearArchivo(base)
  .then((fileName) => {
    console.log(fileName, "creado");
  })
  .catch((err) => {
    console.log(err);
  });
