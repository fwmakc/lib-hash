import { sha384 } from './sha384.helper';

describe('Проверка sha384', () => {
  const testCases = [
    {
      val: 0,
      ref: '21cea59e9bb0f1b1f7776be397e2998e044987158b862593b95395d40b63de7e282c58a20658db1c49a69a5f023514ed',
      secret: 'some secret_word',
    },
    {
      val: 0,
      ref: '5f91550edb03f0bb8917da57f0f8818976f5da971307b7ee4886bb951c4891a1f16f840dae8f655aa5df718884ebc15b',
    },
    {
      val: '0',
      ref: '5f91550edb03f0bb8917da57f0f8818976f5da971307b7ee4886bb951c4891a1f16f840dae8f655aa5df718884ebc15b',
    },
    {
      val: 123456789,
      ref: 'eb455d56d2c1a69de64e832011f3393d45f3fa31d6842f21af92d2fe469c499da5e3179847334a18479c8d1dedea1be3',
    },
    {
      val: 1001,
      ref: '3cef691bb366d379c0c58918ecc450a612b6730a49157246fcf8176319cc041080a3cb2fabebef93942d5fe78b2483c9',
    },
    {
      val: 0b1001, // 9
      ref: 'de6c23dc90b9221fe0150f8a68ec733b796edddca14b69d2fff8f472a4ec797f416319202533dcbdef69a4ee654fab8d',
    },
    {
      val: 0xff, // 255
      ref: 'e1d30a2cb6a1dbd167b960f256428f10eb5a98d7351dbfd491aa84933ec524e773b8ece70dfec7ed1654d177a68aff2f',
    },
    {
      val: 'abcdef',
      ref: 'c6a4c65b227e7387b9c3e839d44869c4cfca3ef583dea64117859b808c1e3d8ae689e1e314eeef52a6ffe22681aa11f5',
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
      ref: '47f05d367b0c32e438fb63e6cf4a5f35c2aa2f90dc7543f8a41a0f95ce8a40a313ab5cf36134a2068c4c969cb50db776',
    },
    {
      val: [], // []
      ref: '562109b054cb4428fc53607b107c0acdf91de434b990a0295f516ef2aad79efc902238944e76d42f21bcf710bfa4c554',
    },
    {
      val: [1, 2, 3], // [1,2,3]
      ref: 'dbedc8d7db9bdb866a7ba8c1fd6f4bc7e3457c09736242c64c51f4ff2fb0bb98e88ade6393a6ba33dbe77f3af4a44776',
    },
    {
      val: ['a', 'b', 'c'], // ["a","b","c"]
      ref: '8fefec189cdc65ca763e282ed48d097c36ca7be07144d339087e6303ba2aecf445dd2318c0ce6f33b8d2f0d4db654204',
    },
    {
      val: {}, // {}
      ref: 'd2a23bc783e3aa38f401e13c7488505137c4954a7fd88331f1597c5ff71111dc807c7370a5b282c6da541c56ede69f30',
    },
    {
      val: { a: 1, b: 2, c: 3 }, // {"a":1,"b":2,"c":3}
      ref: '2d6d61c8bf68e0a2143c2c76f55c8a2f3073585db868b4db8f0e59167146d864092b4719441ae417ab19c28920ceb822',
    },
  ];

  testCases.forEach(({ val, ref, secret }) => {
    if (secret) {
      it(`[secret] Входящая строка: ${val}. Результат: ${ref}`, () => {
        const hashed = sha384(val, secret);
        expect(hashed).toEqual(ref);
      });

      return;
    }

    it(`Входящая строка: ${val}. Результат: ${ref}`, () => {
      const hashed = sha384(val);
      expect(hashed).toEqual(ref);
    });
  });
});
