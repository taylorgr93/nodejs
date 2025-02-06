const Role = require("../models/role");

const validateRole = async (role) => {
  const roleExist = await Role.findOne({ role });
  if (!roleExist) {
    throw new Error(`El rol ${role} no es válido`);
  }
};

module.exports = { validateRole };
