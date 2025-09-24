import * as CryptoJS from 'crypto-js';
import { stringify } from './stringify.helper';

export function sha1(data: any, secret = ''): string {
  const string = stringify(data);

  if (!string) {
    return '';
  }

  if (secret) {
    return CryptoJS.HmacSHA1(string, secret).toString();
  }

  return CryptoJS.SHA1(string).toString();
}
