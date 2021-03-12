import Knex from 'knex';

export async function seed (knex: Knex) {
  await knex('functions').insert([
    { name: 'Cadastro de usuários' },
    { name: 'Cadastro de contas' },
    { name: 'Cadastro de estoque' },
    { name: 'Carápio' },
    { name: 'Pedido'},
    { name: 'Entrega' },
    { name: 'Entrada' },
    { name: 'Saída' },
    { name: 'Caixa' },
    { name: 'Fluxo de Caixa' },
    { name: 'Relatório de Estoque' },
    { name: 'Relatório de Pedidos' },
  ]);
}