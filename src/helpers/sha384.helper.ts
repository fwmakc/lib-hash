import * as CryptoJS from 'crypto-js';
import { stringify } from './stringify.helper';

export function sha384(data: any, secret = ''): string {
  const string = stringify(data);

  if (!string) {
    return '';
  }

  if (secret) {
    return CryptoJS.HmacSHA384(string, secret).toString();
  }

  return CryptoJS.SHA384(string).toString();
}
