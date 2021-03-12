import crypto from 'crypto';

const alg = 'aes-256-ctr';
const pwd = 'ab3a0ea8d6addde6b8fcf2b85aa73db0';

export function criptografar(text: string) {
  const cipher = crypto.createCipher(alg, pwd);
  const cripto = cipher.update(text , 'utf8', 'hex');
  return cripto;
}

export function descriptografar(text: string) {
  const decipher = crypto.createDecipher(alg, pwd);
  const plain = decipher.update(text, 'hex', 'utf8')
  return plain;
}