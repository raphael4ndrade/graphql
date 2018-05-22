const env = require('../env')

const knex = require('knex')(require('../knexfile')[env.branch || 'development']);
module.exports = { knex };