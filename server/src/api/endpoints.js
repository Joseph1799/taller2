const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeesController");


//Empleados
router.get(
  "/employees",
  employeeController.getEmployees
);



module.exports = router;
