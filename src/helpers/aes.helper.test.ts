import { aes } from './aes.helper';
import { stringify } from './stringify.helper';

describe('Проверка aes', () => {
  const testCases = [
    {
      val: 0,
      enc: 'U2FsdGVkX18g7QQKvy8olX8BABWZplvwGLTegABB7PY=',
    },
    {
      val: '0',
      enc: 'U2FsdGVkX198w4RgVwum4eAZrE4GYzlPrDGRCCrhiWM=',
    },
    {
      val: 123456789,
      enc: 'U2FsdGVkX195vYRo7ylmDVOpBDX3Ch3GBcAdztPPnf0=',
    },
    {
      val: 1001,
      enc: 'U2FsdGVkX19hYRv0VxjBCR/OvtufDD6jIc7fcMV/DfA=',
    },
    {
      val: 0b1001, // 9
      enc: 'U2FsdGVkX1/zuEtIYGcbVeApJsNBzUF8LNhqXFaZv1M=',
    },
    {
      val: 0xff, // 255
      enc: 'U2FsdGVkX19wxIcB8xZ/FpOi6qyv/2VbzAScWj9sxxw=',
    },
    {
      val: 'abcdef',
      enc: 'U2FsdGVkX1+l8Ud8N9uD7igog4dkxgXqwQksHVNBvqM=',
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
      enc: 'U2FsdGVkX1/48tWEapOz7zt7QF96/5dmYQr1QekQowg=',
    },
    {
      val: [], // []
      enc: 'U2FsdGVkX18gGTDMyeY/ezXQKVOwwVL47M1WM8ATHDU=',
    },
    {
      val: [1, 2, 3], // [1,2,3]
      enc: 'U2FsdGVkX1+NTAg7OUk9O58vHQyZcAATJBfUNiklODA=',
    },
    {
      val: ['a', 'b', 'c'], // ["a","b","c"]
      enc: 'U2FsdGVkX19t7o8FeevS8vUuGkrXbKthT1gPourFNpc=',
    },
    {
      val: {}, // {}
      enc: 'U2FsdGVkX19Iw7N8Hjrqc6u+nkDSf0RfaT14l1iD0Dg=',
    },
    {
      val: { a: 1, b: 2, c: 3 }, // {"a":1,"b":2,"c":3}
      enc: 'U2FsdGVkX1+numETwl4rD9hxJ05if6TSGKaONFc8IP57wdzv0g1PfLtQNn2xxYjl',
    },
  ];

  testCases.forEach(({ val, enc }) => {
    const secret = 'Some secret word';
    const ref = stringify(val);
    const encoded = aes.encode(val, secret);
    const decoded = aes.decode(encoded, secret);
    const decodedUser = aes.decode(enc, secret);
    it(`Исходная строка: ${val}. Кодированная: ${encoded}. Декодированная: ${decoded}.`, () => {
      expect(decodedUser).toEqual(ref);
      expect(decoded).toEqual(ref);
    });
  });
});
