import * as CryptoJS from 'crypto-js';
import { stringify } from './stringify.helper';

export function ripemd160(data: any): string {
  const string = stringify(data);

  if (!string) {
    return '';
  }

  return CryptoJS.RIPEMD160(string).toString();
}
