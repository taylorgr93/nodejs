const crearArchivo = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

// console.clear();

// este metodo no es factible si mandan mas argumentos
//en la consola en diferente orden
// const { argv } = require("process");
// console.log(process.argv);
// const [, , arg3 = "base=5"] = process.argv;
// const [, base] = arg3.split("=");
// console.log(base);
// const base = 2;

// console.log(argv);
const { base, listar, hasta } = argv;

crearArchivo(base, listar, hasta)
  .then((fileName) => {
    console.log(colors.trap(fileName, "creado"));
  })
  .catch((err) => {
    console.log(err);
  });
