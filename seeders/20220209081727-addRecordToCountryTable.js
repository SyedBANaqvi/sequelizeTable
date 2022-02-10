'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Country', [{
                    code: '+92',
                    abbreviation: 'PAK',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 1,
                    updatedBy: 1
                },
                {
                    code: '+91',
                    abbreviation: 'IND',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 1,
                    updatedBy: 1
                },
                {
                    code: '+93',
                    abbreviation: 'AFG',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 1,
                    updatedBy: 1
                },
                {
                    code: '+61',
                    abbreviation: 'AUS',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 1,
                    updatedBy: 1
                },
                {
                    code: '+45',
                    abbreviation: 'DNK',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 1,
                    updatedBy: 1
                },
                {
                    code: '+1',
                    abbreviation: 'CAN',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 1,
                    updatedBy: 1
                },
                {
                    code: '+86',
                    abbreviation: 'CHN',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 1,
                    updatedBy: 1
                },
                {
                    code: '+33',
                    abbreviation: 'FRA',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 1,
                    updatedBy: 1
                },
                {
                    code: '+98',
                    abbreviation: 'IRN',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 1,
                    updatedBy: 1
                },
                {
                    code: '+964',
                    abbreviation: 'IRQ',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 1,
                    updatedBy: 1
                },


            ],

            {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Country', null, {});
    }
};