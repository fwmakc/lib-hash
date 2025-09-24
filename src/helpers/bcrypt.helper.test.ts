import { bcrypt } from './bcrypt.helper';

describe('Проверка bcrypt', () => {
  const testCases = [
    {
      val: 0,
      enc: '$2a$12$LOZkyhQQ.7avELcasddsWuQs4d/jZd0s2cLp7b9LhF6b0.iePamDy',
    },
    {
      val: '0',
      enc: '$2y$10$/h6X35pZdz5m8tmc5ELy6O/xZ7P.E94XODeWG7RS4LZdiCGSW.CWG',
    },
    {
      val: 123456789,
      enc: '$2a$12$PBSYTRFzAsq7tw4j9OqrW.2bzCag/TMNsXT0putTpGtKmUXrQ5gYW',
    },
    {
      val: 1001,
      enc: '$2y$10$ZWtfJz1hbSMeVkbzbXyOuOvYcTWUdM3AiaxB0NL5.paU/k2GKl7hK',
    },
    {
      val: 0b1001, // 9
      enc: '$2a$12$.SAaQykvKzfT0qmJrFliVe.eqBv0rThi2Lp.Eau1hTK/GV0aZy8WK',
    },
    {
      val: 0xff, // 255
      enc: '$2y$10$LMzrnE6F3iQDq2BlNk3o.u4jiK5k5QGutdCFq7ZzZ1zPYQv9gu/Ly',
    },
    {
      val: 'abcdef',
      enc: '$2y$10$RjtR1Cdhbnh1n7v8LgzWaOGA3vNYHuvgeLvywUhQ/7mVNPznpXWru',
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
      enc: '$2y$04$.5MmqU.th.sUxwUG0tVaOepaDoRt8Of2FqMrHSwcmOO21ri/eCTRO',
    },
    {
      val: [], // []
      enc: '$2y$04$b.gz5VJgMO4O7YeQI/RUCuxVNFsdIZAPep8feHQHpSxThxWg5.eje',
    },
    {
      val: [1, 2, 3], // [1,2,3]
      enc: '$2y$04$QoL2Br6jFCqd5opwMk8yVuGOzvixAzIkiDEEs01Zyhu87xW9OiYZa',
    },
    {
      val: ['a', 'b', 'c'], // ["a","b","c"]
      enc: '$2a$12$hOJXPF5zBZisSEcwxN2H4eTW4ZhWaAHuEWAL0JRJt98h7sy4byNki',
    },
    {
      val: {}, // {}
      enc: '$2a$12$gdJq0U4HZx/HKdrOw4RuregxxdFN69stIMwlnyDLg7hqefRUXgo3i',
    },
    {
      val: { a: 1, b: 2, c: 3 }, // {"a":1,"b":2,"c":3}
      enc: '$2y$04$tELHeN53oY9tWuTPCtMyeeqrqFif9XYX3E4uAzYvarPLQqi47D83.',
    },
  ];

  testCases.forEach(({ val, enc }) => {
    const hashed = bcrypt.hash(val);
    const varified = bcrypt.verify(val, hashed);
    const varifiedUser = bcrypt.verify(val, enc);

    it(`Исходная строка: ${val}. Хешированная: ${hashed}.`, () => {
      if (!hashed) {
        expect(varifiedUser).toBeFalsy();
        expect(varified).toBeFalsy();
        return;
      }

      expect(varifiedUser).toBeTruthy();
      expect(varified).toBeTruthy();
    });
  });
});
