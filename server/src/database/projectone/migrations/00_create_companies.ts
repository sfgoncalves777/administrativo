import Knex from 'knex';

export async function up (knex: Knex){ 
  return knex.schema.createTable('companies', table => {
    table.increments('id').primary();
    table.string('nome');
    table.string('email');
    table.string('contato');
    table.string('status');
  });
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('companies');
}