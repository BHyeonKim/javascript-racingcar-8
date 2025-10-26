import ERROR_MESSAGE from '../src/constants/error.js';
import Parser from '../src/utils/Parser.js';

describe('Parser Class', () => {
  describe('parsePlayersFromString Method', () => {
    it('should throw an error if input is not a string', () => {
      const testCases = [123, [], {}, null, undefined, true];

      testCases.forEach((testCase) => {
        expect(() => Parser.parsePlayersFromString(testCase)).toThrow(
          ERROR_MESSAGE.NOT_STRING,
        );
      });
    });

    it('should throw an error if any driver name is empty string', () => {
      const input = 'pobi,woni,,jun';

      expect(() => Parser.parsePlayersFromString(input)).toThrow(
        ERROR_MESSAGE.EMPTY_STRING,
      );
    });

    it('should throw an error if any driver name exceeds 5 characters', () => {
      const input = 'pobi,woniiiii,jun';

      expect(() => Parser.parsePlayersFromString(input)).toThrow(
        ERROR_MESSAGE.EXCEEDED_FIVE_CHARACTER,
      );
    });

    it('should throw an error if there are duplicate driver names', () => {
      const input = 'pobi,woni,jun,pobi';

      expect(() => Parser.parsePlayersFromString(input)).toThrow(
        ERROR_MESSAGE.DUPLICATED_ARRAY_ITEM,
      );
    });

    it('should correctly parse comma-separated driver names', () => {
      const input = 'pobi,woni,jun';

      const result = Parser.parsePlayersFromString(input);

      expect(result).toEqual(['pobi', 'woni', 'jun']);
    });

    it('should trim whitespace from driver names', () => {
      const input = 'pobi , woni , jun ';

      const result = Parser.parsePlayersFromString(input);

      expect(result).toEqual(['pobi', 'woni', 'jun']);
    });

    it('should handle single driver name', () => {
      const input = 'pobi';

      const result = Parser.parsePlayersFromString(input);

      expect(result).toEqual(['pobi']);
    });
  });

  describe('parseRound Method', () => {
    it('should throw an error if input is not a positive number', () => {
      const input = '0';

      expect(() => Parser.parseRound(input)).toThrow(
        ERROR_MESSAGE.NOT_POSITIVE_NUMBER,
      );
    });

    it('should throw an error if input is negative number', () => {
      const input = '-5';

      expect(() => Parser.parseRound(input)).toThrow(
        ERROR_MESSAGE.NOT_POSITIVE_NUMBER,
      );
    });

    it('should throw an error if input is not a number', () => {
      const input = 'abc';

      expect(() => Parser.parseRound(input)).toThrow(
        ERROR_MESSAGE.NOT_NUMBER,
      );
    });

    it('should correctly parse valid positive number string', () => {
      const input = '5';

      const result = Parser.parseRound(input);

      expect(result).toBe(5);
    });
  })
});
