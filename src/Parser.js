import Validator from './Validator.js';

class Parser {
  static parsePlayersFromString(string) {
    Validator.validateIsString(string);

    const driverNames = string
      .split(',')
      .map((driverName) => driverName.trim());

    driverNames.forEach((driverName) => {
      Validator.validateNotEmptyString(driverName);
      Validator.validateNotExceedFiveCharacter(driverName);
    });

    Validator.validateNoDuplication(driverNames);

    return driverNames;
  }
}

export default Parser;
