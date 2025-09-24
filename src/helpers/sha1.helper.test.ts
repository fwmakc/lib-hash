import { sha1 } from './sha1.helper';

describe('Проверка sha1', () => {
  const testCases = [
    {
      val: 0,
      ref: '79af46f1f456f05ecbbcde922bbcdd82deaa6b41',
      secret: 'some secret_word',
    },
    {
      val: 0,
      ref: 'b6589fc6ab0dc82cf12099d1c2d40ab994e8410c',
    },
    {
      val: '0',
      ref: 'b6589fc6ab0dc82cf12099d1c2d40ab994e8410c',
    },
    {
      val: 123456789,
      ref: 'f7c3bc1d808e04732adf679965ccc34ca7ae3441',
    },
    {
      val: 1001,
      ref: 'dd01903921ea24941c26a48f2cec24e0bb0e8cc7',
    },
    {
      val: 0b1001, // 9
      ref: '0ade7c2cf97f75d009975f4d720d1fa6c19f4897',
    },
    {
      val: 0xff, // 255
      ref: '3028f51407d83338f72f994bc283572452a877de',
    },
    {
      val: 'abcdef',
      ref: '1f8ac10f23c5b5bc1167bda84b833e5c057a77d2',
    },
    {
      val: '',
      ref: '',
    },
    {
      val: null,
      ref: '',
    },
    {
      val: false,
      ref: '',
    },
    {
      val: true, // 1
      ref: '356a192b7913b04c54574d18c28d46e6395428ab',
    },
    {
      val: [], // []
      ref: '97d170e1550eee4afc0af065b78cda302a97674c',
    },
    {
      val: [1, 2, 3], // [1,2,3]
      ref: '9ef50cc82ae474279fb8e82896142702bccbb33a',
    },
    {
      val: ['a', 'b', 'c'], // ["a","b","c"]
      ref: 'e13460afb1e68af030bb9bee8344c274494661fa',
    },
    {
      val: {}, // {}
      ref: 'bf21a9e8fbc5a3846fb05b4fa0859e0917b2202f',
    },
    {
      val: { a: 1, b: 2, c: 3 }, // {"a":1,"b":2,"c":3}
      ref: 'e7ec4a8f2309bdd4c4c57cb2adfb79c91a293597',
    },
  ];

  testCases.forEach(({ val, ref, secret }) => {
    if (secret) {
      it(`[secret] Входящая строка: ${val}. Результат: ${ref}`, () => {
        const hashed = sha1(val, secret);
        expect(hashed).toEqual(ref);
      });

      return;
    }

    it(`Входящая строка: ${val}. Результат: ${ref}`, () => {
      const hashed = sha1(val);
      expect(hashed).toEqual(ref);
    });
  });
});
