'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.createTable(
            'courseTable',

            {
                id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
                name: { type: Sequelize.STRING(50), allowNull: false }
            }
        )
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('courseTable')

    }

};