const env = process.env.NODE_ENV || 'development' // it decides whether you are in development or test 
const config = require('../../knexfile')[env] //it loads the configuration for your environment 
const connection = require('knex')(config) // it loads knex using that configuration 

module.exports = connection
