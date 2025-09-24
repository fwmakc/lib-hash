import { sha256 } from './sha256.helper';

describe('Проверка sha256', () => {
  const testCases = [
    {
      val: 0,
      ref: '497c0b86c92cfc760361ee14f157acdcca9729fddbcc70456593083100e18ea4',
      secret: 'some secret_word',
    },
    {
      val: 0,
      ref: '5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9',
    },
    {
      val: '0',
      ref: '5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9',
    },
    {
      val: 123456789,
      ref: '15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225',
    },
    {
      val: 1001,
      ref: 'fe675fe7aaee830b6fed09b64e034f84dcbdaeb429d9cccd4ebb90e15af8dd71',
    },
    {
      val: 0b1001, // 9
      ref: '19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7',
    },
    {
      val: 0xff, // 255
      ref: '9556b82499cc0aaf86aee7f0d253e17c61b7ef73d48a295f37d98f08b04ffa7f',
    },
    {
      val: 'abcdef',
      ref: 'bef57ec7f53a6d40beb640a780a639c83bc29ac8a9816f1fc6c5c6dcd93c4721',
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
      ref: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
    },
    {
      val: [], // []
      ref: '4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945',
    },
    {
      val: [1, 2, 3], // [1,2,3]
      ref: 'a615eeaee21de5179de080de8c3052c8da901138406ba71c38c032845f7d54f4',
    },
    {
      val: ['a', 'b', 'c'], // ["a","b","c"]
      ref: 'fa1844c2988ad15ab7b49e0ece09684500fad94df916859fb9a43ff85f5bb477',
    },
    {
      val: {}, // {}
      ref: '44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a',
    },
    {
      val: { a: 1, b: 2, c: 3 }, // {"a":1,"b":2,"c":3}
      ref: 'e6a3385fb77c287a712e7f406a451727f0625041823ecf23bea7ef39b2e39805',
    },
  ];

  testCases.forEach(({ val, ref, secret }) => {
    if (secret) {
      it(`[secret] Входящая строка: ${val}. Результат: ${ref}`, () => {
        const hashed = sha256(val, secret);
        expect(hashed).toEqual(ref);
      });

      return;
    }

    it(`Входящая строка: ${val}. Результат: ${ref}`, () => {
      const hashed = sha256(val);
      expect(hashed).toEqual(ref);
    });
  });
});
