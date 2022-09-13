import { sign, Secret, SignOptions, VerifyOptions, verify } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

import { TokenPayload } from './jwt.model';

// ! For local testing only
export function generateToken(): string {
  const payload = {
    name: 'Jurrit van der Ploeg',
    userId: 1991,
    accessTypes: [
      'getArchives',
      'getArchives',
      'createArchives',
      'updateArchives',
      'deleteArchives'
    ]
  };
  const privateKey = fs.readFileSync(path.join(__dirname, '../../../private.key'));

  const signInOptions: SignOptions = {
    algorithm: 'RS256',
    expiresIn: '1h'
  };

  const secret: Secret = { key: privateKey, passphrase: process.env.JWT_PASSPHRASE || '' };

  return sign(payload, secret, signInOptions);
};

export function validateToken(token: string): Promise<TokenPayload> {
  const publicKey = fs.readFileSync(path.join(__dirname, '../../../public.key'));

  const verifyOptions: VerifyOptions = {
    algorithms: ['RS256'],
  };

  return new Promise((resolve, reject) => {
    verify(token, publicKey, verifyOptions, (error, decoded: TokenPayload) => {
      if (error) {
        return reject(error);
      };

      resolve(decoded);
    })
  });
}
