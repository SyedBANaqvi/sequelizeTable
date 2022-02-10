'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.createTable('Product', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            quantity: { type: Sequelize.INTEGER, allowNull: false },
            productType: { type: Sequelize.STRING, allowNull: false },
            createdAt: { type: Sequelize.DATE, allowNull: false },
            updatedAt: { type: Sequelize.DATE, allowNull: false },
            createdBy: { type: Sequelize.INTEGER },
            updatedBy: { type: Sequelize.INTEGER }
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.dropTable('Product')
    }
};