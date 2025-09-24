import * as CryptoJS from 'crypto-js';
import { stringify } from './stringify.helper';

export function sha224(data: any, secret = ''): string {
  const string = stringify(data);

  if (!string) {
    return '';
  }

  if (secret) {
    return CryptoJS.HmacSHA224(string, secret).toString();
  }

  return CryptoJS.SHA224(string).toString();
}
