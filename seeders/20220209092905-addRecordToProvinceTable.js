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
        return queryInterface.rawSelect('Country', { where: { abbreviation: 'PAK' } }, ['id']).then(countryId => {
            return queryInterface.bulkInsert('Province', [{

                        name: 'PUNJAB',
                        countryId: countryId,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        createdBy: 1,
                        updatedBy: 1
                    },
                    {

                        name: 'SINDH',
                        countryId: countryId,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        createdBy: 1,
                        updatedBy: 1
                    },
                    {

                        name: 'Balochistan',
                        countryId: countryId,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        createdBy: 1,
                        updatedBy: 1
                    },
                    {

                        name: ' Khyber Pakhtunkhwa',
                        countryId: countryId,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        createdBy: 1,
                        updatedBy: 1
                    },
                    {

                        name: 'Jammu and Kashmir[',
                        countryId: countryId,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        createdBy: 1,
                        updatedBy: 1
                    },
                    {

                        name: ' Gilgit-Baltistan',
                        countryId: countryId,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        createdBy: 1,
                        updatedBy: 1
                    },



                ],

                {});
        })



        // .then(() => {
        //     return queryInterface.rawSelect('Country', { where: { abbreviation: 'IND' } }, ['id']).then(countryId => {
        //         return queryInterface.bulkInsert('Province', [{

        //                     name: 'Delhi',
        //                     countryId: countryId,
        //                     createdAt: new Date(),
        //                     updatedAt: new Date(),
        //                     createdBy: 1,
        //                     updatedBy: 1
        //                 },
        //                 {

        //                     name: 'Jammu & Kashmir',
        //                     countryId: countryId,
        //                     createdAt: new Date(),
        //                     updatedAt: new Date(),
        //                     createdBy: 1,
        //                     updatedBy: 1
        //                 },
        //                 {

        //                     name: 'Ladakh',
        //                     countryId: countryId,
        //                     createdAt: new Date(),
        //                     updatedAt: new Date(),
        //                     createdBy: 1,
        //                     updatedBy: 1
        //                 },
        //                 {

        //                     name: ' Dadra and Nagar Haveli',
        //                     countryId: countryId,
        //                     createdAt: new Date(),
        //                     updatedAt: new Date(),
        //                     createdBy: 1,
        //                     updatedBy: 1
        //                 },
        //                 {

        //                     name: 'Daman and Diu',
        //                     countryId: countryId,
        //                     createdAt: new Date(),
        //                     updatedAt: new Date(),
        //                     createdBy: 1,
        //                     updatedBy: 1
        //                 },
        //                 {

        //                     name: ' Puducherry',
        //                     countryId: countryId,
        //                     createdAt: new Date(),
        //                     updatedAt: new Date(),
        //                     createdBy: 1,
        //                     updatedBy: 1
        //                 },
        //                 {

        //                     name: ' Chandigarh',
        //                     countryId: countryId,
        //                     createdAt: new Date(),
        //                     updatedAt: new Date(),
        //                     createdBy: 1,
        //                     updatedBy: 1
        //                 },



        //             ],

        //             {});
        //     })
        // })

    },


    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('Province', null, {});
    }
};