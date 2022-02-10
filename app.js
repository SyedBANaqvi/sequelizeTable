// const Sequelize = require('sequelize');

// const connection = new Sequelize('demo', 'sa', 'syedbilal@12345');
// const connection = new Sequelize('demo', 'sa', 'syedbilal@12345', {
//     dialect: 'mssql',
//     host: '127.0.0.1'
// });
// const Articles = connection.define('articles', {
//     title: Sequelize.STRING,
//     body: Sequelize.TEXT,

// });

// connection.sync().then(result => {
//     Articles.create({
//         title: 'Syed ',
//         body: 'How are you MR.Bilal, Hope you are fine.',

//     });

// });







// connection.sync({


//         force: true,
//         logging: console.log
//     }).then(function() {})
// connection.sync().then(result => {
//     Articles.create({
//         title: 'Syed Bilal',
//         body: 'How are you MR.Bilal, Hope you are fine.'
//     });
// });




// connection.sync().then(function() {
//     Articles.findAll().then(function(articles) {
//         console.log(articles.length);
//     });
// });