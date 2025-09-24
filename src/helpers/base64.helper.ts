import * as CryptoJS from 'crypto-js';
import { stringify } from './stringify.helper';

function encode(data: any): string {
  const string = stringify(data);

  if (!string) {
    return '';
  }

  const words = CryptoJS.enc.Utf8.parse(string);
  return CryptoJS.enc.Base64.stringify(words);
}

function decode(data: string): string {
  if (!data) {
    return '';
  }

  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
}

export const base64 = {
  encode,
  decode,
};
