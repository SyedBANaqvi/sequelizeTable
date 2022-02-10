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
        return queryInterface.rawSelect('Province', { where: { name: 'PUNJAB' } }, ['id']).then(provinceId => {
            return queryInterface.bulkInsert('City', [{

                        abbreviation: 'LHR',
                        code: '042',
                        provinceId: provinceId,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        createdBy: 1,
                        updatedBy: 1
                    },
                    {

                        abbreviation: 'MUL',
                        code: '061',
                        provinceId: provinceId,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        createdBy: 1,
                        updatedBy: 1
                    },
                    {

                        abbreviation: 'FSD',
                        code: '041',
                        provinceId: provinceId,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        createdBy: 1,
                        updatedBy: 1
                    },
                    {

                        abbreviation: 'RWP',
                        code: '051',
                        provinceId: provinceId,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        createdBy: 1,
                        updatedBy: 1
                    },




                ],

                {});
        })

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('City', null, {});
    }
};