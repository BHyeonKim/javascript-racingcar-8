import ERROR_MESSAGE from '../src/constants/error.js';
import Parser from '../src/utils/Parser.js';

describe('Parser Class', () => {
  describe('parsePlayersFromString Method', () => {
    it.each([
      [123, 'number'],
      [[], 'array'],
      [{}, 'object'],
      [null, 'null'],
      [undefined, 'undefined'],
      [true, 'boolean'],
    ])(
      'should throw an error if input is not a string: %s (%s)',
      (testCase) => {
        expect(() => Parser.parsePlayersFromString(testCase)).toThrow(
          ERROR_MESSAGE.NOT_STRING,
        );
      },
    );

    it.each([
      ['pobi,woni,,jun', 'empty name', ERROR_MESSAGE.EMPTY_STRING],
      [
        'pobi,woniiiii,jun',
        'name exceeds 5 characters',
        ERROR_MESSAGE.EXCEEDED_FIVE_CHARACTER,
      ],
      [
        'pobi,woni,jun,pobi',
        'duplicate names',
        ERROR_MESSAGE.DUPLICATED_ARRAY_ITEM,
      ],
      ['', 'empty string', ERROR_MESSAGE.EMPTY_STRING],
      [',,,', 'only commas', ERROR_MESSAGE.EMPTY_STRING],
    ])(
      'should throw an error for invalid input: "%s" (%s)',
      (input, _, expectedError) => {
        expect(() => Parser.parsePlayersFromString(input)).toThrow(
          expectedError,
        );
      },
    );

    it.each([
      ['pobi,woni,jun', ['pobi', 'woni', 'jun'], 'comma-separated names'],
      ['pobi , woni , jun ', ['pobi', 'woni', 'jun'], 'names with whitespace'],
      ['pobi', ['pobi'], 'single name'],
      [
        'a,bb,ccc,dddd,eeeee',
        ['a', 'bb', 'ccc', 'dddd', 'eeeee'],
        'various length names',
      ],
    ])('should correctly parse valid input: "%s" (%s)', (input, expected) => {
      const result = Parser.parsePlayersFromString(input);
      expect(result).toEqual(expected);
    });
  });

  describe('parseRound Method', () => {
    it.each([
      ['0', ERROR_MESSAGE.NOT_POSITIVE_NUMBER],
      ['-5', ERROR_MESSAGE.NOT_POSITIVE_NUMBER],
      ['-1', ERROR_MESSAGE.NOT_POSITIVE_NUMBER],
      ['abc', ERROR_MESSAGE.NOT_NUMBER],
      ['', ERROR_MESSAGE.EMPTY_STRING],
      ['1.5', ERROR_MESSAGE.NOT_INTEGER],
    ])(
      'should throw an error for invalid input: "%s" (%s)',
      (input, expectedError) => {
        expect(() => Parser.parseRound(input)).toThrow(expectedError);
      },
    );

    it.each([
      ['5', 5, 'single digit'],
      ['1', 1, 'minimum positive'],
      ['100', 100, 'large number'],
      ['999', 999, 'three digit number'],
    ])(
      'should correctly parse valid positive number string: "%s" (%s)',
      (input, expected) => {
        const result = Parser.parseRound(input);
        expect(result).toBe(expected);
      },
    );
  });
});
