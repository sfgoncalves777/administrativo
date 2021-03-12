import Knex from 'knex';

export async function up (knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.integer('id_empresa').notNullable();
    table.string('nome').notNullable();
    table.string('contato').notNullable();
    table.string('email').notNullable();
    table.string('senha').notNullable();
    table.foreign('id_empresa').references('id').inTable('companies').onDelete('CASCADE');
  });
}

export async function down (knex: Knex){
  return knex.schema.dropTable('users');
}