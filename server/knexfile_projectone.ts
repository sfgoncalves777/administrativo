import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'root',
    database: 'projectone'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'projectone', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'projectone', 'seeds')
  },
  useNullAsDefault: true
}