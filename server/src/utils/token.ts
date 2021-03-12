import jwt from 'jsonwebtoken';

export const secret_token = '3bba648688760eb5876cab26f0596592';

export function createToken (userId: string) {
  return jwt.sign({ id: userId }, secret_token, { expiresIn: 3600 });
}
