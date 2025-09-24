import { ripemd160 } from './ripemd160.helper';

describe('Проверка ripemd160', () => {
  const testCases = [
    {
      val: 0,
      ref: 'ba5ed015715da74cf1e87230ba73d4855edaf6f6',
    },
    {
      val: '0',
      ref: 'ba5ed015715da74cf1e87230ba73d4855edaf6f6',
    },
    {
      val: 123456789,
      ref: 'd3d0379126c1e5e0ba70ad6e5e53ff6aeab9f4fa',
    },
    {
      val: 1001,
      ref: '81af256024323bb1c344cc6e825e3b9e33dafd7b',
    },
    {
      val: 0b1001, // 9
      ref: 'b21ffbb290fb266e77182797ba316f6fd920dcfa',
    },
    {
      val: 0xff, // 255
      ref: 'a1ce018344f401973c428efed5db1ff8cc9d6252',
    },
    {
      val: 'abcdef',
      ref: '0ec97ff209a8c019df8f4027d7aea8f9c45ac0cf',
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
      ref: 'c47907abd2a80492ca9388b05c0e382518ff3960',
    },
    {
      val: [], // []
      ref: '2bdf48d04094f739353b0c92f25b8bdcf7bbb679',
    },
    {
      val: [1, 2, 3], // [1,2,3]
      ref: '8f2d4e28986e9fa691b2a79cc613e664c9e5cc8e',
    },
    {
      val: ['a', 'b', 'c'], // ["a","b","c"]
      ref: '45bf9f2a250fd13fe1189ba6eb56d82dc1e0daa4',
    },
    {
      val: {}, // {}
      ref: '85e318a2b32953ede3405ff0b2914e96c6292464',
    },
    {
      val: { a: 1, b: 2, c: 3 }, // {"a":1,"b":2,"c":3}
      ref: '8274179ed4ea9400c472fec82352918e86670000',
    },
  ];

  testCases.forEach(({ val, ref }) => {
    it(`Входящая строка: ${val}. Результат: ${ref}`, () => {
      const hashed = ripemd160(val);
      // console.log('--', val, hashed);
      expect(hashed).toEqual(ref);
    });
  });
});
