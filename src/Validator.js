import ERROR_MESSAGE from './constants/error.js';

class Validator {
  static validateNotEmptyString(string) {
    if (string.length < 1) {
      throw new Error(ERROR_MESSAGE.EMPTY_STRING);
    }
  }

  static validateLessThanFiveCharacter(string) {
    if (string.length > 5) {
      throw new Error(ERROR_MESSAGE.EXCEED_FIVE_CHARACTER);
    }
  }

  static validateNoDuplication(arr) {
    Validator.validateIsArray(arr);

    const set = new Set(arr);

    if (arr.length !== set.size) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_ARRAY_ITEM);
    }
  }

  static validateNumber(number) {
    if (Number.isNaN(number)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
  }

  static validatePositiveNumber(number) {
    Validator.validateNumber(number);

    if (number < 1) {
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE_NUMBER);
    }
  }

  static validateIsArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error(ERROR_MESSAGE.NOT_ARRAY);
    }
  }
}

export default Validator;
