const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Base de datos online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar base de datos.");
  }
};

module.exports = { dbConnection };
