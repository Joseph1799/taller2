const connection = require("../models/database");

class EmployeeModel {
  static async getEmployees() {
    
    const query = "CALL getEmployees()";
    const [rows] = await connection.execute(query);
    const employees = rows[0];
    const employees_json = employees.map((employee) => ({
      EmployeeID: employee.EmployeeID,
      FirstName: employee.FirstName,
      LastName: employee.LastName,
      Email: employee.Email,
      Salary: parseFloat(employee.Salary).toFixed(2)
    }));

    
    return { employees_json };
  }
}

module.exports = EmployeeModel;
