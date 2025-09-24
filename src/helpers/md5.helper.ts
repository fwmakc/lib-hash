import * as CryptoJS from 'crypto-js';
import { stringify } from './stringify.helper';

export function md5(data: any, secret = ''): string {
  const string = stringify(data);

  if (!string) {
    return '';
  }

  if (secret) {
    return CryptoJS.HmacMD5(string, secret).toString();
  }

  return CryptoJS.MD5(string).toString();
}
