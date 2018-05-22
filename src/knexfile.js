// Update with your config settings.
// const { user, password } = require('./env')

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'graphql',
      user: 'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
