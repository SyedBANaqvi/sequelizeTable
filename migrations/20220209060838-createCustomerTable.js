'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.createTable('Customer', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

            firstName: { type: Sequelize.STRING(50), allowNull: false },
            lastName: { type: Sequelize.STRING(50), allowNull: false },
            street: { type: Sequelize.STRING, allowNull: false },
            city: { type: Sequelize.STRING, allowNull: false },
            zipCode: { type: Sequelize.STRING, allowNull: false },
            phone: { type: Sequelize.STRING, allowNull: false },
            createdAt: { type: Sequelize.DATE, allowNull: false },
            updatedAt: { type: Sequelize.DATE, allowNull: false },
            createdBy: { type: Sequelize.INTEGER },
            updatedBy: { type: Sequelize.INTEGER }

        })
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.dropTable('Customer')
    }
};