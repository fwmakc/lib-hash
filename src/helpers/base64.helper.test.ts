import { base64 } from './base64.helper';
import { stringify } from './stringify.helper';

describe('Проверка base64', () => {
  const testCases = [
    {
      val: 0,
      enc: 'MA==',
    },
    {
      val: '0',
      enc: 'MA==',
    },
    {
      val: 123456789,
      enc: 'MTIzNDU2Nzg5',
    },
    {
      val: 1001,
      enc: 'MTAwMQ==',
    },
    {
      val: 0b1001, // 9
      enc: 'OQ==',
    },
    {
      val: 0xff, // 255
      enc: 'MjU1',
    },
    {
      val: 'abcdef',
      enc: 'YWJjZGVm',
    },
    {
      val: '',
      enc: '',
    },
    {
      val: null,
      enc: '',
    },
    {
      val: false,
      enc: '',
    },
    {
      val: true, // 1
      enc: 'MQ==',
    },
    {
      val: [], // []
      enc: 'W10=',
    },
    {
      val: [1, 2, 3], // [1,2,3]
      enc: 'WzEsMiwzXQ==',
    },
    {
      val: ['a', 'b', 'c'], // ["a","b","c"]
      enc: 'WyJhIiwiYiIsImMiXQ==',
    },
    {
      val: {}, // {}
      enc: 'e30=',
    },
    {
      val: { a: 1, b: 2, c: 3 }, // {"a":1,"b":2,"c":3}
      enc: 'eyJhIjoxLCJiIjoyLCJjIjozfQ==',
    },
  ];

  testCases.forEach(({ val, enc }) => {
    const ref = stringify(val);
    const encoded = base64.encode(val);
    const decoded = base64.decode(encoded);
    it(`Исходная строка: ${val}. Результат: ${encoded}`, () => {
      expect(encoded).toEqual(enc);
      expect(decoded).toEqual(ref);
    });
  });
});
