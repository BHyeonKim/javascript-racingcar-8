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
});
