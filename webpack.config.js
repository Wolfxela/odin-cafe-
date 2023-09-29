const path = require('path');

module.exports = 
{
    entry:{
         index:'./src/index.js',
         homePage:'./src/homePage.js',
         menuPage:'./src/menuPage.js',
         contactPage:'./src/contactPage.js',
         aboutUsPage:'./src/aboutUsPage.js',
         generalFunctions:'./src/generalFunctions.js'
    },

    output:
    {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
    },
};