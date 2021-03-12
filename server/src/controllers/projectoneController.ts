import { Request, Response } from 'express';
import schema from '../validators/company_projectone';
import { criptografar } from '../utils/cripto'
import knex from '../database/projectone/connection';

class Projeto1Controller {
  async index ( requeste: Request, response: Response ) {
    const companies = await knex('companies')
      .select('*')
      .orderBy('nome');

    return response.json(companies);
  }

  async show ( request: Request, response: Response ) {
    const { id } = request.params;
    const company = await knex('companies')
      .where('id', id)
      .select('nome', 'email', 'contato', 'status')
      .first();

    return response.json(company);
  }

  async create ( request: Request, response: Response ) {
    var errors: {nome?: string, contato?: string, email?: string, senha?: string} = {}
    const {
      nome,
      contato,
      email,
      senha
    } = request.body;

    await schema.nome.validate({ nome }).catch((err) => errors.nome = err.errors[0]);
    await schema.contato.validate({ contato }).catch((err) => errors.contato = err.errors[0]);
    await schema.email.validate({ email }).catch((err) => errors.email = err.errors[0]);
    await schema.senha.validate({ senha }).catch((err) => errors.senha = err.errors[0]);

    if(errors.nome || errors.contato || errors.email || errors.senha) {
      return response.json({error: errors});
    }

    const users = await knex('users')
      .where('email', email)
      .select('email')
      .first();

    if(users) {
      errors.email = 'Existe usuário com esse e-mail';
      return response.json({ error: errors });
    }
    
    const company = {
      nome: nome,
      email: email,
      contato: contato,
      status: 'ativo'
    }

    const trx = await knex.transaction();

    const [ id_empresa ] = await trx('companies').insert(company).returning('id');
    
    const senha_crip =  criptografar(senha);

    const user = {
      id_empresa,
      nome: nome,
      contato: contato,
      email: email,
      senha: senha_crip
    }

    const [ id_user ] = await trx('users').insert(user).returning('id');

    const user_function = {
      user_id: id_user,
      function_id: 1
    }

    await trx('users_functions').insert(user_function);

    trx.commit();
    return response.status(201).send();
  }

  async update ( request: Request, response: Response ) {
    var errors: {nome?: string, contato?: string, email?: string} = {}
    const { id } = request.params;
    const { nome, email, contato, status } = request.body;

    await schema.nome.validate({ nome }).catch((err) => errors.nome = err.errors[0]);
    await schema.contato.validate({ contato }).catch((err) => errors.contato = err.errors[0]);
    await schema.email.validate({ email }).catch((err) => errors.email = err.errors[0]);

    if(errors.nome || errors.contato || errors.email ) {
      return response.json({error: errors});
    }

    const users = await knex('users')
      .where('email', email)
      .select('email')
      .first();


    const user = await knex('companies')
      .where('id', id)
      .select('email')
      .first();

    if(users && users.email !== user.email) {
      errors.email = 'Existe usuário com esse e-mail';
      return response.json(errors);
    }
    
    await knex('users')
      .where('email', user.email)
      .update({ nome, contato, email });

    await knex('companies')
      .where('id', id)
      .update({ nome, email, contato, status });

    return response.status(201).send();
  }

  async delete ( request: Request, response: Response ) {
    const { id } = request.params;

    await knex('companies')
      .where('id', id)
      .delete()

    return response.status(201).send();
  }
}

export default Projeto1Controller;