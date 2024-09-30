const colors = require("colors");
const { mostrarMenu, pausa } = require("./helpers/mensajes");

console.clear();

const main = async () => {
  // console.log("Hola mundo!");
  let opt = "";

  do {
    opt = await mostrarMenu();
    console.log({ opt });
    await pausa();
  } while (opt !== "0");

  // pausa();
};

main();
