import bcryptjs from 'bcryptjs';
import { stringify } from './stringify.helper';

function hash(data: any, saltRounds = 10): string {
  const string = stringify(data);

  if (!string) {
    return '';
  }

  return bcryptjs.hashSync(string, saltRounds);
}

function verify(data: any, hash: string): boolean {
  if (!hash) {
    return false;
  }

  const string = stringify(data);

  if (!string) {
    return false;
  }

  return bcryptjs.compareSync(string, hash);
}

export const bcrypt = {
  hash,
  verify,
};
