
exports.up = knex => knex.schema.createTable('user', table => {
  table.increments('id')
  table.string('name').notNullable()
  table.string('email').notNullable()
  table.string('password').notNullable()
})

exports.down = knex => knex.schema.dropTable('user')
