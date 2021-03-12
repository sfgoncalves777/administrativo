import { Request, Response } from 'express';
import schema from '../validators/user_tagsistemas';
import { criptografar } from '../utils/cripto';
import knex from '../database/tagsistemas/connection';

class TagSistemasController {
  async index ( request: Request, response: Response ) {
    const usuarios = await knex('users')
      .select('*')
      .orderBy('nome');

    return response.json(usuarios);
  }

  async show ( request: Request, response: Response ) {
    const { id } = request.params;
    const usuario = await knex('users')
      .where('id', id)
      .select('nome', 'contato', 'email')
      .first();

    return response.json(usuario);
  }

  async create ( request: Request, response: Response ) {
    var errors: {nome?: string, contato?: string, email?: string, senha?: string} = {}
    const { nome, contato, email, senha } = request.body;   

    await schema.nome.validate({ nome }).catch((err) => errors.nome = err.errors[0]);
    await schema.contato.validate({ contato }).catch((err) => errors.contato = err.errors[0]);
    await schema.email.validate({ email }).catch((err) => errors.email = err.errors[0]);
    await schema.senha.validate({ senha }).catch((err) => errors.senha = err.errors[0]);

    if(errors.nome || errors.contato || errors.email || errors.senha) {
      return response.json({error: errors});
    }

    const user = await knex('users')
      .where('email', email)
      .select('email')
      .first();

    if(user) {
      errors.email = 'Existe usuário com esse e-mail';
      return response.json({ error: errors });
    }
    
    const senha_crip =  criptografar(senha);

    const dados = {
      nome,
      contato,
      email,
      senha: senha_crip
    }

    await knex('users').insert(dados);
    return response.status(201).send();
  }

  async update ( request: Request, response: Response ) {
    var errors: {nome?: string, contato?: string, email?: string} = {}
    const { id } = request.params;
    const { nome, contato, email } = request.body;

    await schema.nome.validate({ nome }).catch((err) => errors.nome = err.errors[0]);
    await schema.contato.validate({ contato }).catch((err) => errors.contato = err.errors[0]);
    await schema.email.validate({ email }).catch((err) => errors.email = err.errors[0]);

    if(errors.nome || errors.contato || errors.email) {
      return response.json({error: errors});
    }

    const user = await knex('users')
      .where('email', email)
      .select('email')
      .first();

    const userEmail = await knex('users')
      .where('id', id)
      .select('email', 'id')
      .first();

    if(user && user.email !== userEmail.email) {
      errors.email = 'Existe usuário com esse e-mail';
      return response.json({ error: errors });
    } 

    await knex('users')
      .where('id', id)
      .update({ nome, contato, email });

    return response.status(201).send();
  }

  async delete ( request: Request, response: Response ) {
    const { id } = request.params;

    await knex('users')
      .where('id', id)
      .delete();

    return response.status(201).send();
  }
}

export default TagSistemasController;