import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { secret_token } from '../utils/token';

interface TokenPayload {
  id: number;
  iat: number;
  exp: number;
}

async function tokenMiddleware(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.json({ error: 'Token não encontrado' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return response.json({ error: 'Token inválido' });
  }

  const [ scheme, token ] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return response.json({ error: 'Token com formato inválido' })
  }

  jwt.verify(token, secret_token, (err, decode) => {
    if(err) {
      return response.json({ error: 'Token inválido' })
    }

    const { id } = decode as TokenPayload;
    request.userId = id;
    console.log(token);
    return next();
  })
}

export default tokenMiddleware;