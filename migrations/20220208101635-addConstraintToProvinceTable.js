'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.addConstraint('Province', {
            fields: ['countryId'],
            type: 'foreign key',
            name: 'FK_Province_CountryId',
            references: { //Required field
                table: 'Country',
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
        queryInterface.removeConstraint('Province', 'FK_Province_CountryId')
    }
};