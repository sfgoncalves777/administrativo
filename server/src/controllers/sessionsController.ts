import { Request, Response } from 'express';
import knex from '../database/tagsistemas/connection';
import { descriptografar } from '../utils/cripto';
import { createToken } from '../utils/token';

class Sessions {
  async login(request: Request, response: Response) {
    const { email, senha } = request.body;

    const user = await knex('users')
      .where('email', email)
      .select('*')
      .first();

    if(!user) {
      return response.json({ error: 'Não existe usuário com esse e-mail' });
    }

    if(senha !== descriptografar(user.senha)) {
      return response.json({ error: 'Senha inválida' });
    }

    const token = createToken(user.id);
    user.senha = undefined;
    return response.json({ user, token })

  }

  async updateToken(request: Request, response: Response) {
    const id_user = request.headers.id_user as string;
    const token = createToken(id_user);
    return response.json({ token });
  }
}

export default Sessions;