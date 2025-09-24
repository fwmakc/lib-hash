import { sha224 } from './sha224.helper';

describe('Проверка sha224', () => {
  const testCases = [
    {
      val: 0,
      ref: '0e3f9b25418a306a823b416beaa20160133ba0bda1caace79cdab21e',
      secret: 'some secret_word',
    },
    {
      val: 0,
      ref: 'dfd5f9139a820075df69d7895015360b76d0360f3d4b77a845689614',
    },
    {
      val: '0',
      ref: 'dfd5f9139a820075df69d7895015360b76d0360f3d4b77a845689614',
    },
    {
      val: 123456789,
      ref: '9b3e61bf29f17c75572fae2e86e17809a4513d07c8a18152acf34521',
    },
    {
      val: 1001,
      ref: '3062fca8a7009eee6c3bebe1984cb09abfa4142400cc6226bce9d88e',
    },
    {
      val: 0b1001, // 9
      ref: '192f56eb9bd894a72b30c303247b107be2c4591f310dd69a67927f48',
    },
    {
      val: 0xff, // 255
      ref: '72c46573e7c471f10fdbcf3236df394e76aa5322cf4c8ac0c41adf43',
    },
    {
      val: 'abcdef',
      ref: '7043631cb415556a275a4ebecb802c74ee9f6153908e1792a90b6a98',
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
      ref: 'e25388fde8290dc286a6164fa2d97e551b53498dcbf7bc378eb1f178',
    },
    {
      val: [], // []
      ref: '23f497f643e37257c3f7e54f049d8829c41103bb29bf8c0ba0d1df0a',
    },
    {
      val: [1, 2, 3], // [1,2,3]
      ref: 'f6bc357807106561d8f739eafea32e3d9c7352493493bac8084123bc',
    },
    {
      val: ['a', 'b', 'c'], // ["a","b","c"]
      ref: 'bdcfbcaf75f667f68779d0cb7db4d5d6174f66ead00a121c84bf8ae8',
    },
    {
      val: {}, // {}
      ref: '5cdd15a873608087be07a41b7f1a04e96d3a66fe7a9b0faac71f8d05',
    },
    {
      val: { a: 1, b: 2, c: 3 }, // {"a":1,"b":2,"c":3}
      ref: '6e4bf930dd4f4a577ad4323f1c0e7aeb3de08ff966f79c9435a58dbe',
    },
  ];

  testCases.forEach(({ val, ref, secret }) => {
    if (secret) {
      it(`[secret] Входящая строка: ${val}. Результат: ${ref}`, () => {
        const hashed = sha224(val, secret);
        expect(hashed).toEqual(ref);
      });

      return;
    }

    it(`Входящая строка: ${val}. Результат: ${ref}`, () => {
      const hashed = sha224(val);
      expect(hashed).toEqual(ref);
    });
  });
});
