const { knex } = require('../config/database')

module.exports = {
  Query: {
    async getUser(_, { id }) {
      return await knex('user').where({ id }).first()
    },
    async getUsers() {
      return await knex('user')
    }
  },
  Mutation: {
    async createUser(_, { input }) {
      return await knex('user').insert({
        name : input.name,
        email : input.email,
        password : input.password
      })
    },
    // async updateUser(_, modifiedUser){
    //   // implement...
    // }
  }
}