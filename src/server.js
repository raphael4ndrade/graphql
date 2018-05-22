const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')
const { knex } = require('./config/database')

const app = express();
app.use('/api', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, _ => {
  knex.migrate.latest()
    .then(_ => console.log('Servidor rodando na porta 4000...'));
})