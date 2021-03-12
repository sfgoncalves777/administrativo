import knex from 'knex';
import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'root',
    database: 'tagsistemas'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'tagsistemas', 'migrations')
  },
  useNullAsDefault: true
}