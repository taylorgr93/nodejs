// multiplicar.js
const { writeFileSync } = require("node:fs");
const colors = require("colors");

// si coloco async en la funcion devuelvo una promesa
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    const fileName = `tabla-${base}.txt`;

    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("====================");
      console.log(colors.red.underline(`   Tabla del : ${base}   `));
      console.log("====================");
      console.log(colors.rainbow(salida));
    }

    writeFileSync(fileName, salida);
    // console.log(`tabla-${base}.txt creado`);

    return fileName;
  } catch (err) {
    console.error(err);
    return err;
  }
};

module.exports = crearArchivo;
