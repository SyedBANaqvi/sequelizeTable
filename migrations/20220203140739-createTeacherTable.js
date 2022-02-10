'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'teacherTable',

            {
                id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
                name: { type: Sequelize.STRING(50), allowNull: false },
                contact: { type: Sequelize.STRING(20), allowNull: false },
                email: {
                    type: Sequelize.STRING,
                    unique: true,
                    allowNull: false
                },

            }
        )

    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('teacherTable')

    }
};