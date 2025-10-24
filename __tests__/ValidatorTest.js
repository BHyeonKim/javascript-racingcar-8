import ERROR_MESSAGE from '../src/constants/error.js';
import Validator from '../src/Validator.js';

describe('Validator Class', () => {
  describe('validateNotEmptyString Method', () => {
    it('should throw an error if length of string is less than 1', () => {
      const string = '';

      expect(() => Validator.validateNotEmptyString(string)).toThrow(
        ERROR_MESSAGE.EMPTY_STRING,
      );
    });

    it('should not throw error if length of string is one', () => {
      const string = 'a';

      expect(() => Validator.validateNotEmptyString(string)).not.toThrow();
    });

    it('should not throw error if length of string is more than 1', () => {
      const string = 'abc';

      expect(() => Validator.validateNotEmptyString(string)).not.toThrow();
    });

    it('should not throw an error if string is special character', () => {
      const string = '\\';

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

    it('should not throw an error if length of string is 5', () => {
      const string = 'abcde';

      expect(() =>
        Validator.validateNotExceedFiveCharacter(string),
      ).not.toThrow();
    });

    it('should not throw an error if length of string is less than 5', () => {
      const string = 'a';

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

    it('should throw an error if duplication exists in array with string items', () => {
      const input = ['test1', 'test2', 'test3', 'test1'];

      expect(() => Validator.validateNoDuplication(input)).toThrow(
        ERROR_MESSAGE.DUPLICATED_ARRAY_ITEM,
      );
    });

    it('should throw an error if duplication exists in array with number items', () => {
      const input = [1, 2, 3, 1];

      expect(() => Validator.validateNoDuplication(input)).toThrow(
        ERROR_MESSAGE.DUPLICATED_ARRAY_ITEM,
      );
    });

    it('should throw an error if duplication exists in array with mixed type of items', () => {
      const input = [1, 2, 'test1', 1];

      expect(() => Validator.validateNoDuplication(input)).toThrow(
        ERROR_MESSAGE.DUPLICATED_ARRAY_ITEM,
      );
    });

    it('should not throw an error if there is no duplication', () => {
      const input = ['test1', 'test2', 'test3'];

      expect(() => Validator.validateNoDuplication(input)).not.toThrow();
    });
  });
});
