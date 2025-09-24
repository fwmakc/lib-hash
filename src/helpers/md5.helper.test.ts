import { md5 } from './md5.helper';

describe('Проверка md5', () => {
  const testCases = [
    {
      val: 0,
      ref: '3b71afd36453cfa80bc6298a515b49f6',
      secret: 'some secret_word',
    },
    {
      val: 0,
      ref: 'cfcd208495d565ef66e7dff9f98764da',
    },
    {
      val: '0',
      ref: 'cfcd208495d565ef66e7dff9f98764da',
    },
    {
      val: 123456789,
      ref: '25f9e794323b453885f5181f1b624d0b',
    },
    {
      val: 1001,
      ref: 'b8c37e33defde51cf91e1e03e51657da',
    },
    {
      val: 0b1001, // 9
      ref: '45c48cce2e2d7fbdea1afc51c7c6ad26',
    },
    {
      val: 0xff, // 255
      ref: 'fe131d7f5a6b38b23cc967316c13dae2',
    },
    {
      val: 'abcdef',
      ref: 'e80b5017098950fc58aad83c8c14978e',
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
      ref: 'c4ca4238a0b923820dcc509a6f75849b',
    },
    {
      val: [], // []
      ref: 'd751713988987e9331980363e24189ce',
    },
    {
      val: [1, 2, 3], // [1,2,3]
      ref: 'f1e46f328e6decd56c64dd5e761dc2b7',
    },
    {
      val: ['a', 'b', 'c'], // ["a","b","c"]
      ref: 'c29a5747d698b2f95cdfd5ed6502f19d',
    },
    {
      val: {}, // {}
      ref: '99914b932bd37a50b983c5e7c90ae93b',
    },
    {
      val: { a: 1, b: 2, c: 3 }, // {"a":1,"b":2,"c":3}
      ref: '9e0bf104708effc55357dc36f9426ce7',
    },
  ];

  testCases.forEach(({ val, ref, secret }) => {
    if (secret) {
      it(`[secret] Входящая строка: ${val}. Результат: ${ref}`, () => {
        const hashed = md5(val, secret);
        expect(hashed).toEqual(ref);
      });

      return;
    }

    it(`Входящая строка: ${val}. Результат: ${ref}`, () => {
      const hashed = md5(val);
      expect(hashed).toEqual(ref);
    });
  });
});
