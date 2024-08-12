// libreria para detectar argumentos desde la consola
const { argv } = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    describe: "Multiplication base",
    type: "number",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    describe: "Show the multiplication table",
    default: false,
  })
  .option("h", {
    alias: "hsta",
    type: "number",
    describe: "Limit multiplication number",
    demandOption: false,
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero.";
    }
    return true;
  });

module.exports = argv;
