// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the login routes
const loginRoutes = require("./login.routes");
// Import the install router
const installRouter = require("./install.routes");
// Import the employee routes
const employeeRouter = require("./employee.routes");
// Add the install router to the main router
router.use(installRouter);
// Add the login routes to the main router
router.use(loginRoutes);
// Add the employee routes to the main router
router.use(employeeRouter);
// Export the router
module.exports = router;
