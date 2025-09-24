import * as CryptoJS from 'crypto-js';
import { stringify } from './stringify.helper';

export function sha256(data: any, secret = ''): string {
  const string = stringify(data);

  if (!string) {
    return '';
  }

  if (secret) {
    return CryptoJS.HmacSHA256(string, secret).toString();
  }

  return CryptoJS.SHA256(string).toString();
}
