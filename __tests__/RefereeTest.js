import ERROR_MESSAGE from '../src/constants/error.js';
import GAME_CONSTANT from '../src/constants/gameConstant.js';
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

    it.each([
      [' ', 'string'],
      [5, 'number'],
      [false, 'boolean'],
      [{}, 'object'],
    ])(
      'should throw an error if input is not an array (%s: %s)',
      (testcase) => {
        expect(() => Referee.getWinningCars(testcase)).toThrow(
          ERROR_MESSAGE.NOT_ARRAY,
        );
      },
    );

    it.each([
      [[{}, {}, {}], 'empty objects'],
      [[5, 6, 7], 'numbers'],
      [[' ', ' '], 'strings'],
      [[false, true], 'booleans'],
    ])(
      'should throw an error if input is not array of cars (%s)',
      (testCase) => {
        expect(() => Referee.getWinningCars(testCase)).toThrow(
          ERROR_MESSAGE.NOT_CAR,
        );
      },
    );
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

    it.each([
      [' ', 'string'],
      [5, 'number'],
      [false, 'boolean'],
      [{}, 'object'],
    ])(
      'should throw an error if input is not an array (%s: %s)',
      (testcase) => {
        expect(() => Referee.getDriverNames(testcase)).toThrow(
          ERROR_MESSAGE.NOT_ARRAY,
        );
      },
    );

    it.each([
      [[{}, {}, {}], 'empty objects'],
      [[5, 6, 7], 'numbers'],
      [[' ', ' '], 'strings'],
      [[false, true], 'booleans'],
    ])(
      'should throw an error if input is not array of cars (%s)',
      (testCase) => {
        expect(() => Referee.getDriverNames(testCase)).toThrow(
          ERROR_MESSAGE.NOT_CAR,
        );
      },
    );
  });
  describe('playRound Method', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should not move any cars when all random numbers are below threshold', () => {
      const cars = [new Car('test1'), new Car('test2'), new Car('test3')];

      const spiedGenerateRandomNumber = jest
        .spyOn(Referee, 'generateRandomNumber')
        .mockReturnValueOnce(GAME_CONSTANT.RANDOM_START)
        .mockReturnValueOnce(GAME_CONSTANT.THRESHOLD - 1)
        .mockReturnValueOnce(GAME_CONSTANT.THRESHOLD - 1);

      Referee.playRound(cars);

      expect(cars[0].distance).toBe(0);
      expect(cars[1].distance).toBe(0);
      expect(cars[2].distance).toBe(0);

      expect(spiedGenerateRandomNumber).toHaveBeenCalledTimes(3);
    });

    it('should move all cars when all random numbers are at or above threshold', () => {
      const cars = [new Car('test1'), new Car('test2'), new Car('test3')];

      const spiedGenerateRandomNumber = jest
        .spyOn(Referee, 'generateRandomNumber')
        .mockReturnValueOnce(GAME_CONSTANT.THRESHOLD)
        .mockReturnValueOnce(GAME_CONSTANT.THRESHOLD + 1)
        .mockReturnValueOnce(GAME_CONSTANT.RAMDOM_END);

      Referee.playRound(cars);

      expect(cars[0].distance).toBe(1);
      expect(cars[1].distance).toBe(1);
      expect(cars[2].distance).toBe(1);

      expect(spiedGenerateRandomNumber).toHaveBeenCalledTimes(3);
    });

    it('should maintain previous distances and increment correctly', () => {
      const cars = [
        new Car('test1', 3),
        new Car('test2', 5),
        new Car('test3', 0),
      ];

      const spiedGenerateRandomNumber = jest
        .spyOn(Referee, 'generateRandomNumber')
        .mockReturnValueOnce(GAME_CONSTANT.THRESHOLD)
        .mockReturnValueOnce(GAME_CONSTANT.THRESHOLD - 1)
        .mockReturnValueOnce(GAME_CONSTANT.THRESHOLD);

      Referee.playRound(cars);

      expect(cars[0].distance).toBe(4);
      expect(cars[1].distance).toBe(5);
      expect(cars[2].distance).toBe(1);

      expect(spiedGenerateRandomNumber).toHaveBeenCalledTimes(3);
    });

    it.each([
      [' ', 'string'],
      [5, 'number'],
      [false, 'boolean'],
      [{}, 'object'],
    ])(
      'should throw an error if input is not an array (%s: %s)',
      (testcase) => {
        expect(() => Referee.playRound(testcase)).toThrow(
          ERROR_MESSAGE.NOT_ARRAY,
        );
      },
    );

    it.each([
      [[{}, {}, {}], 'empty objects'],
      [[5, 6, 7], 'numbers'],
      [[' ', ' '], 'strings'],
      [[false, true], 'booleans'],
    ])(
      'should throw an error if input is not array of cars (%s)',
      (testCase) => {
        expect(() => Referee.playRound(testCase)).toThrow(
          ERROR_MESSAGE.NOT_CAR,
        );
      },
    );
  });
});
