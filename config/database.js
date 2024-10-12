const { Sequelize } = require("sequelize");

// For PostgreSQL or MySQL:
const sequelize = new Sequelize("trip_plan_api_db", "postgres", "150202", {
    host: "localhost",
    dialect: "postgres", 
});

module.exports = sequelize;