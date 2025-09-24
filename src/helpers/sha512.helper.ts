import * as CryptoJS from 'crypto-js';
import { stringify } from './stringify.helper';

export function sha512(data: any, secret = ''): string {
  const string = stringify(data);

  if (!string) {
    return '';
  }

  if (secret) {
    return CryptoJS.HmacSHA512(string, secret).toString();
  }

  return CryptoJS.SHA512(string).toString();
}
