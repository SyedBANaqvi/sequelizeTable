'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.createTable('Order', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            customerId: { type: Sequelize.INTEGER, allowNull: false },
            customerName: { type: Sequelize.STRING(50), allowNull: false },
            toStreet: { type: Sequelize.STRING, allowNull: false },
            toCity: { type: Sequelize.STRING, allowNull: false },
            toZipCode: { type: Sequelize.STRING, allowNull: false },
            shipDate: { type: Sequelize.DATE, allowNull: false },
            productId: { type: Sequelize.INTEGER, allowNull: false },
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
        return queryInterface.dropTable('Order')
    }
};