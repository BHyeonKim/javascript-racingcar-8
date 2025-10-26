import ERROR_MESSAGE from '../src/constants/error.js';
import Car from '../src/models/Car.js';
import Referee from '../src/models/Referee.js';

describe('Referee class', () => {
  describe('getWinningCars Method', () => {
    it('should return winningCar', () => {
      const carA = new Car('test1', 1);
      const carB = new Car('test2', 2);
      const carC = new Car('test3', 3);

      expect(Referee.getWinningCars([carA, carB, carC])).toEqual([carC]);
    });

    it('should return winningCars if there are co-champion', () => {
      const carA = new Car('test1', 3);
      const carB = new Car('test2', 2);
      const carC = new Car('test3', 3);

      expect(Referee.getWinningCars([carA, carB, carC])).toEqual([carA, carC]);
    });

    it('should return empty array if there are no cars', () => {
      expect(Referee.getWinningCars([])).toEqual([]);
    });

    it('should throw an error if input is not an array', () => {
      const testCases = [' ', 5, false, {}];

      testCases.forEach((testcase) => {
        expect(() => Referee.getWinningCars(testcase)).toThrow(
          ERROR_MESSAGE.NOT_ARRAY,
        );
      });
    });

    it('should throw an error if input is not array of cars', () => {
      const testCases = [
        [{}, {}, {}],
        [5, 6, 7],
        [' ', ' '],
        [false, true],
      ];

      testCases.forEach((testCase) => {
        expect(() => Referee.getWinningCars(testCase)).toThrow(
          ERROR_MESSAGE.NOT_CAR,
        );
      });
    });
  });
  describe('getDriverNames Method', () => {
    it('should return array of driver names', () => {
      const carA = new Car('test1', 1);
      const carB = new Car('test2', 2);
      const carC = new Car('test3', 3);

      expect(Referee.getDriverNames([carA, carB, carC])).toEqual([
        carA.driverName,
        carB.driverName,
        carC.driverName,
      ]);
    });

    it('should throw an error if input is not an array', () => {
      const testCases = [' ', 5, false, {}];

      testCases.forEach((testcase) => {
        expect(() => Referee.getWinningCars(testcase)).toThrow(
          ERROR_MESSAGE.NOT_ARRAY,
        );
      });
    });

    it('should throw an error if input is not array of cars', () => {
      const testCases = [
        [{}, {}, {}],
        [5, 6, 7],
        [' ', ' '],
        [false, true],
      ];

      testCases.forEach((testCase) => {
        expect(() => Referee.getWinningCars(testCase)).toThrow(
          ERROR_MESSAGE.NOT_CAR,
        );
      });
    });
  });
});
