import { convertToIntPositiv } from './util';

describe('Utils', () => {
  describe('convertToIntPositiv', () => {
    test('when number is integer positiv should be the same', () => {
      const num = convertToIntPositiv(5);
      expect(num).toBe(5);
    });

    test('when number is float should be rounded', () => {
      const num1 = convertToIntPositiv(5.2);
      expect(num1).toBe(5);

      const num2 = convertToIntPositiv(5.6);
      expect(num2).toBe(5);
    });

    test('when caracter should be 0', () => {
      const caracter = 'a' as unknown as number;
      const num = convertToIntPositiv(caracter);
      expect(num).toBe(1);
    });

    test('when number is integer negative should be 0', () => {
      const num = convertToIntPositiv(-5);
      expect(num).toBe(1);
    });
  });
});
