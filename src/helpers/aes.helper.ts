import * as CryptoJS from 'crypto-js';
import { stringify } from './stringify.helper';

function encode(data: any, secret: string): string {
  const string = stringify(data);

  if (!string) {
    return '';
  }

  return CryptoJS.AES.encrypt(string, secret).toString();
}

function decode(data: any, secret: string): string {
  if (!data) {
    return '';
  }

  return CryptoJS.AES.decrypt(data, secret).toString(CryptoJS.enc.Utf8);
}

export const aes = {
  encode,
  decode,
};
