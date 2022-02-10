const Sequelize = require('sequelize');
const object = new Sequelize('Employee', 'sa', 'syedbilal@12345', {
    dialect: 'mssql',
    host: '127.0.0.1'
});

const Emp = object.define('employee', {
    employeeId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    employeeName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    employeContact: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    employeeEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Must be a valid email address",
            }
        }

    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
object.sync().then(result => {
    Emp.create({
        employeeId: 16,
        employeeName: 'Ghulfam',
        employeContact: 323482885,
        employeeEmail: 'ghull@gmail.com',
        city: 'Karachi',
    });
});