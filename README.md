# Taller ULACIT - Creación de un Servicio Web para Generar un JSON desde un Procedimiento Almacenado

Este proyecto es parte del taller para ULACIT realizado por los miembros del Grupo 6.

## Miembros del Grupo 6

- **Miembro 1:** Maria Paula Lobo Muñoz
- **Miembro 2:** Emiliano Madrigal Céspedes
- **Miembro 3:** Juan Esteban Mejía García
- **Miembro 4:** Joseph Vargas Castro

## Descripción

El objetivo de este proyecto es desarrollar un servicio web que interactúe con una base de datos MySQL para generar un archivo JSON a partir de un procedimiento almacenado. El procedimiento almacenado selecciona todos los registros de la tabla `Employees` y los devuelve en formato JSON.

## Requisitos Previos

- **Base de datos:** MySQL
- **Lenguaje de programación:** Node.js
- **Herramientas de desarrollo:**
  - Visual Studio Code
  - Postman
  - GitHub

## Estructura del Proyecto

1. **Base de Datos:**

   - Nombre: `CompanyDB`
   - Tabla: `Employees`
   - Campos:
     - `EmployeeID` (INT, PRIMARY KEY, AUTO_INCREMENT)
     - `FirstName` (VARCHAR(50))
     - `LastName` (VARCHAR(50))
     - `Email` (VARCHAR(100))
     - `Salary` (DECIMAL(10, 2))

2. **Procedimiento Almacenado:**

   - Nombre: `GetEmployees`
   - Descripción: Selecciona todos los registros de la tabla `Employees` y los devuelve en formato JSON.

3. **Servicio Web:**
   - Lenguaje/Framework: Node.js
   - Descripción: Al llamar al endpoint `/employees`, el servicio web ejecuta el procedimiento almacenado `GetEmployees` y devuelve el resultado en formato JSON.

## Configuración y Ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/emadrigal12/taller2.git
   ```
2. Cambia al directorio del proyecto:
   ```bash
   cd taller2
   ```

### 2. Configurar el entorno

#### Requisitos Previos

Antes de comenzar, asegurarse de tener instalados los siguientes componentes en tu equipo:

- **Node.js:** [nodejs.org](https://nodejs.org/).
- **MySQL:** [mysql.com](https://dev.mysql.com/downloads/installer/).

#### Pasos para Configurar el Entorno

1. Instalar las dependencias del proyecto:

   ```bash
   npm install
   ```

2. Configurar la conexión a la base de datos MySQL:

   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

   ```env
   DB_HOST=localhost
   DB_USER=usuario
   DB_PASSWORD=contraseña
   DB_NAME=CompanyDB
   ```

   Recordar reemplazar `usuario` y `contraseña` con las credenciales correctas para tu base de datos MySQL.

3. Ejecutar migraciones para crear la tabla `Employees` y el procedimiento almacenado `GetEmployees`:

   ```bash
   node migrations.js
   ```

4. Iniciar el servicio web:

   ```bash
   node index.js
   ```

### 5. Uso del Servicio Web

Una vez que el servicio web esté en funcionamiento, puedes acceder al endpoint `/employees` para obtener la lista de empleados en formato JSON.

#### Ejemplo de Solicitud:

Realiza una solicitud GET a:

```
http://localhost:5000/employees
```

#### Ejemplo de Respuesta:

```json
{
  "employees_json": [
    {
      "EmployeeID": 1,
      "FirstName": "John",
      "LastName": "Doe",
      "Email": "john.doe@example.com",
      "Salary": 55000.0
    },
    {
      "EmployeeID": 2,
      "FirstName": "Jane",
      "LastName": "Smith",
      "Email": "jane.smith@example.com",
      "Salary": 60000.0
    }
  ]
}
```

### 6. Pruebas

Puedes probar el servicio utilizando herramientas como **Postman** o directamente desde tu navegador web.

#### Probar con Postman:

1. Abre Postman.
2. Crea una nueva solicitud GET.
3. Introduce la URL `http://localhost:5000/employees`.
4. Haz clic en **Send**.
5. Deberías ver una respuesta en formato JSON con la lista de empleados.

#### Probar en Navegador:

Simplemente ingresa `http://localhost:5000/employees` en la barra de direcciones de tu navegador y verás la respuesta en JSON.

### 7. Créditos

Este proyecto fue desarrollado como parte de un taller para ULACIT. Agradecemos a los profesores y compañeros de clase por su apoyo y colaboración.
