// multiplicar.js
const { writeFile, writeFileSync } = require("node:fs");

const crearArchivo = (base = 5) => {
  try {
    const fileName = `tabla-${base}.txt`;

    console.log("====================");
    console.log(`  Tabla del : ${base}  `);
    console.log("====================");

    let salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`tabla-${base}.txt creado`);

    return fileName;
  } catch (err) {
    return err;
  }
};

module.exports = crearArchivo;
