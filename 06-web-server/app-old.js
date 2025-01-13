const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);

    // res.writeHead(200, { "Content-type": "application/json" });
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv ");
    res.writeHead(200, { "Content-type": "application/csv" });

    const persona = {
      id: 1,
      nombre: "Taylor",
    };

    // res.write(JSON.stringify(persona));
    res.write("id, nombre\n");
    res.write("1, Taylor\n");
    res.write("2, Daniela\n");
    res.write("3, Jaun\n");

    // res.writeHead(200);
    // res.write("Hola mundo!");
    res.end();
  })
  .listen(8080);

console.log(`Escuchando en el puerto: 8080`);
