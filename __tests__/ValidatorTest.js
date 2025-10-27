import ERROR_MESSAGE from '../src/constants/error.js';
import Validator from '../src/utils/Validator.js';
import Car from '../src/models/Car.js';

describe('Validator Class', () => {
  describe('validateNotEmptyString Method', () => {
    it('should throw an error if length of string is less than 1', () => {
      const string = '';

      expect(() => Validator.validateNotEmptyString(string)).toThrow(
        ERROR_MESSAGE.EMPTY_STRING,
      );
    });

    it.each([
      ['a', 'single character'],
      ['abc', 'multiple characters'],
      ['\\', 'special character'],
    ])('should not throw error for valid string: %s (%s)', (string) => {
      expect(() => Validator.validateNotEmptyString(string)).not.toThrow();
    });
  });

  describe('validateNotExceedFiveCharacter Method', () => {
    it('should throw an error if length of string is more than 5', () => {
      const string = 'abcdef';

      expect(() => Validator.validateNotExceedFiveCharacter(string)).toThrow(
        ERROR_MESSAGE.EXCEEDED_FIVE_CHARACTER,
      );
    });

    it.each([
      ['abcde', 'exactly 5 characters'],
      ['a', 'less than 5 characters'],
      ['abc', '3 characters'],
    ])('should not throw error for valid string: %s (%s)', (string) => {
      expect(() =>
        Validator.validateNotExceedFiveCharacter(string),
      ).not.toThrow();
    });
  });

  describe('validateNoDuplication Method', () => {
    it('should throw an error if input is not an array', () => {
      const input = 'test';

      expect(() => Validator.validateNoDuplication(input)).toThrow(
        ERROR_MESSAGE.NOT_ARRAY,
      );
    });

    it.each([
      [['test1', 'test2', 'test3', 'test1'], 'string items'],
      [[1, 2, 3, 1], 'number items'],
      [[1, 2, 'test1', 1], 'mixed type items'],
    ])('should throw an error if duplication exists: %s (%s)', (input) => {
      expect(() => Validator.validateNoDuplication(input)).toThrow(
        ERROR_MESSAGE.DUPLICATED_ARRAY_ITEM,
      );
    });

    it('should not throw an error if there is no duplication', () => {
      const input = ['test1', 'test2', 'test3'];

      expect(() => Validator.validateNoDuplication(input)).not.toThrow();
    });
  });
  describe('validateNumber', () => {
    it.each([
      [undefined, 'undefined'],
      [null, 'null'],
      [[], 'array'],
      [{}, 'object'],
      ['string', 'string'],
      [NaN, 'NaN'],
    ])('should throw an error if input is not a number: %s (%s)', (value) => {
      expect(() => Validator.validateNumber(value)).toThrow(
        ERROR_MESSAGE.NOT_NUMBER,
      );
    });

    it.each([
      [10, 'positive number'],
      [0, 'zero'],
      [-5, 'negative number'],
      [3.14, 'decimal'],
    ])('should not throw an error for valid number: %s (%s)', (input) => {
      expect(() => Validator.validateNumber(input)).not.toThrow();
    });
  });
  describe('validatePositiveNumber', () => {
    it.each([
      [undefined, 'undefined', ERROR_MESSAGE.NOT_NUMBER],
      [null, 'null', ERROR_MESSAGE.NOT_NUMBER],
      [[], 'array', ERROR_MESSAGE.NOT_NUMBER],
      [{}, 'object', ERROR_MESSAGE.NOT_NUMBER],
      ['string', 'string', ERROR_MESSAGE.NOT_NUMBER],
      [-10, 'negative number', ERROR_MESSAGE.NOT_POSITIVE_NUMBER],
      [0, 'zero', ERROR_MESSAGE.NOT_POSITIVE_NUMBER],
    ])(
      'should throw an error for invalid input: %s (%s)',
      (value, _, expectedError) => {
        expect(() => Validator.validatePositiveNumber(value)).toThrow(
          expectedError,
        );
      },
    );

    it.each([
      [10, 'positive integer'],
      [1, 'one'],
      [100, 'large number'],
      [3.14, 'decimal'],
    ])(
      'should not throw an error for valid positive number: %s (%s)',
      (input) => {
        expect(() => Validator.validatePositiveNumber(input)).not.toThrow();
      },
    );
  });
  describe('validateIsArray', () => {
    it.each([
      ['string', 'string'],
      [{}, 'object'],
      [0, 'number'],
      [undefined, 'undefined'],
      [null, 'null'],
      [true, 'boolean'],
    ])('should throw an error if input is not an array: %s (%s)', (value) => {
      expect(() => Validator.validateIsArray(value)).toThrow(
        ERROR_MESSAGE.NOT_ARRAY,
      );
    });

    it.each([
      [[], 'empty array'],
      [[1, 2, 3], 'array with numbers'],
      [['a', 'b'], 'array with strings'],
    ])('should not throw an error for valid array: %s (%s)', (input) => {
      expect(() => Validator.validateIsArray(input)).not.toThrow();
    });
  });

  describe('validateIsCar', () => {
    it.each([
      [{}, 'object'],
      [[], 'array'],
      [' ', 'string'],
      [1, 'number'],
      [undefined, 'undefined'],
      [null, 'null'],
      [true, 'boolean'],
    ])('should throw an error if input is not a Car: %s (%s)', (testCase) => {
      expect(() => Validator.validateIsCar(testCase)).toThrow(
        ERROR_MESSAGE.NOT_CAR,
      );
    });

    it('should not throw an error if input is instance of Car', () => {
      const input = new Car('test');

      expect(() => Validator.validateIsCar(input)).not.toThrow();
    });
  });
});
