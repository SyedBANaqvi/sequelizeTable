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

        await queryInterface.bulkInsert('teacherTable', [{
                name: 'teacher1',
                contact: '3218332824',
                email: 'teacher@ucp.pk'
            },
            {
                name: 'teacher2',
                contact: '321222824',
                email: 'teache222r@ucp.pk'
            }
        ], {})
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete('teacherTable', null, {});
    }
};






// module.exports = {
//         async up(queryInterface, Sequelize) {



//             await queryInterface.bulkInsert('teacherTable', [{
//                         id: 1,
//                         name: 'teacher1',
//                         contact: '3218332824',
//                         email: 'teacher@ucp.pk'

//                     })
//                 },

//                 async down(queryInterface, Sequelize) {
//                     /**
//                      * Add commands to revert seed here.
//                      *
//                      * Example:
//                      * await queryInterface.bulkDelete('People', null, {});
//                      */
//                 }
//         };