'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.addConstraint('Order', {
                fields: ['customerId'],
                type: 'foreign key',
                name: 'FK_Order_customerId',
                references: { //Required field
                    table: 'Customer',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            })
            .then(() => {
                return queryInterface.addConstraint('Order', {
                    fields: ['productId'],
                    type: 'foreign key',
                    name: 'FK_Order_productId',
                    references: { //Required field
                        table: 'Product',
                        field: 'id'
                    },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                })
            });


    },


    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */

        await queryInterface.removeConstraint('Order', 'FK_Order_productId')

        .then(() => {
            await queryInterface.removeConstraint('Order', 'FK_Order_customerId')
        })
    }
};