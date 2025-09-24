import { sha512 } from './sha512.helper';

describe('Проверка sha512', () => {
  const testCases = [
    {
      val: 0,
      ref: 'dd172b0035e9b4333f9b41f5f57c79fd9c591488d2e182189dd767a697367c0a3005312b35b3b15a35bfb90fcb7f9487602ab078a839b15e6b000252a47a24be',
      secret: 'some secret_word',
    },
    {
      val: 0,
      ref: '31bca02094eb78126a517b206a88c73cfa9ec6f704c7030d18212cace820f025f00bf0ea68dbf3f3a5436ca63b53bf7bf80ad8d5de7d8359d0b7fed9dbc3ab99',
    },
    {
      val: '0',
      ref: '31bca02094eb78126a517b206a88c73cfa9ec6f704c7030d18212cace820f025f00bf0ea68dbf3f3a5436ca63b53bf7bf80ad8d5de7d8359d0b7fed9dbc3ab99',
    },
    {
      val: 123456789,
      ref: 'd9e6762dd1c8eaf6d61b3c6192fc408d4d6d5f1176d0c29169bc24e71c3f274ad27fcd5811b313d681f7e55ec02d73d499c95455b6b5bb503acf574fba8ffe85',
    },
    {
      val: 1001,
      ref: 'e3d0e2ef3cab0dab2c12f297e3bc618f6b976aced29b3a301828c6f9f1e1aabbe6dab06e1f899c9c2ae2ca86caa330115218817f4ce36d333733cb2b4c7afde7',
    },
    {
      val: 0b1001, // 9
      ref: '0dc526d8c4fa04084f4b2a6433f4cd14664b93df9fb8a9e00b77ba890b83704d24944c93caa692b51085bb476f81852c27e793600f137ae3929018cd4c8f1a45',
    },
    {
      val: 0xff, // 255
      ref: 'b84abbb04904e63955cf7b9def018fb974c71e690fbdc8fc56dc02fe5a974821ade3aea25e0658f1aae869330960befaaf7425ecfef6b137a046794263c3a4f0',
    },
    {
      val: 'abcdef',
      ref: 'e32ef19623e8ed9d267f657a81944b3d07adbb768518068e88435745564e8d4150a0a703be2a7d88b61e3d390c2bb97e2d4c311fdc69d6b1267f05f59aa920e7',
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
      ref: '4dff4ea340f0a823f15d3f4f01ab62eae0e5da579ccb851f8db9dfe84c58b2b37b89903a740e1ee172da793a6e79d560e5f7f9bd058a12a280433ed6fa46510a',
    },
    {
      val: [], // []
      ref: 'b25b294cb4deb69ea00a4c3cf3113904801b6015e5956bd019a8570b1fe1d6040e944ef3cdee16d0a46503ca6e659a25f21cf9ceddc13f352a3c98138c15d6af',
    },
    {
      val: [1, 2, 3], // [1,2,3]
      ref: '60f7b5dc86ded48785436192a08dbfd04894d7f1b417c4f8d3714679a7f78cb3c833f16a8559a1cf1f32968747dc1d95ef34826263dacf125ded8f5c374be4c0',
    },
    {
      val: ['a', 'b', 'c'], // ["a","b","c"]
      ref: '3dd19b25a178f22ce47d5a9befee876ee194e2ccffd83f09150a545ed5c45701b8319507a9defb1fd186cd4f5a0cc9870589676958e72a2b6165b65e1f80d0ca',
    },
    {
      val: {}, // {}
      ref: '27c74670adb75075fad058d5ceaf7b20c4e7786c83bae8a32f626f9782af34c9a33c2046ef60fd2a7878d378e29fec851806bbd9a67878f3a9f1cda4830763fd',
    },
    {
      val: { a: 1, b: 2, c: 3 }, // {"a":1,"b":2,"c":3}
      ref: '6bbcda7073a1c4b821ca129f24b9aa8878709ea68180e0ca623ed08864793da8587000523e64b31ebf7db84577828946ade2aadbca1f0d53fa114759d4c9bc59',
    },
  ];

  testCases.forEach(({ val, ref, secret }) => {
    if (secret) {
      it(`[secret] Входящая строка: ${val}. Результат: ${ref}`, () => {
        const hashed = sha512(val, secret);
        expect(hashed).toEqual(ref);
      });

      return;
    }

    it(`Входящая строка: ${val}. Результат: ${ref}`, () => {
      const hashed = sha512(val);
      expect(hashed).toEqual(ref);
    });
  });
});
