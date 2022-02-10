'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        return queryInterface.addConstraint('City', {
            fields: ['provinceId', ],
            type: 'foreign key',
            name: 'FK_City_ProvinceId',
            references: { //Required field
                table: 'Province',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        queryInterface.removeConstraint('City', 'FK_City_ProvinceId')
    }
};