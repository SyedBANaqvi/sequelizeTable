const Sequelize = require('sequelize');
const subject = new Sequelize('Teacher', 'sa', 'syedbilal@12345', {
    dialect: 'mssql',
    host: '127.0.0.1'
});
const Tech = subject.define('teachers', {
    TeacherId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    TeacherName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TeacherContact: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TeacherEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Must be a valid email address",
            }
        }
    },
    TeacherCity: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false


});
subject.sync({ alter: true }).then(result => {
    Tech.create({
        TeacherName: 'ali',
        TeacherContact: '03218332824',
        TeacherEmail: 'ali54@gmail.com',
        TeacherCity: 'LaKarachihore',
    });
}).catch(err => {
    console.log(err)
});