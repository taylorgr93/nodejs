// server.js
const express = require("express");
const cors = require("cors");

/**
 * Clase Server:
 * Encapsula la configuración y arranque de un servidor Express.
 */
class Server {
  constructor() {
    // Instancia la aplicación de Express
    this.app = express();
    // Lee el puerto desde las variables de entorno
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    // Llama a los métodos de configuración
    this.middlewares(); // Configuración de middlewares
    this.routes(); // Definición de rutas
  }

  /**
   * middlewares:
   * Función que configura los middlewares de la aplicación.
   */
  middlewares() {
    // Directorio público:
    this.app.use(cors());

    // Ofrece archivos estáticos desde la carpeta "public".
    this.app.use(express.static("public"));
  }

  /**
   * routes:
   * Función que define las rutas de la aplicación.
   */
  routes() {
    // Ruta de ejemplo en "/api":
    // Retorna un mensaje de "Hello world" cuando se accede a "/api".
    this.app.use(this.usuariosPath, require("../routes/usuarios.routes"));
  }

  /**
   * listen:
   * Función que pone a escuchar el servidor en el puerto configurado.
   */
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto:", this.port);
    });
  }
}

// Exporta la clase Server para ser utilizada en otros archivos.
module.exports = Server;
