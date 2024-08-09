const EmployeeModel = require("../Models/employeeModel");

async function getEmployees(req, res) {
    try {
      const employees = await EmployeeModel.getEmployees();
      res.status(200).json(employees);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener empleados: " + error.message });
    }
  }

  module.exports = {
    getEmployees
  };