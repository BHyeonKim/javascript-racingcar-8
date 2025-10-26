import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';
import GAME_CONSTANT from '../constants/gameConstant.js';

class Referee {
  static getWinningCars(cars) {
    Validator.validateIsArray(cars);

    if (cars.length === 0) {
      return [];
    }

    cars.forEach((car) => {
      Validator.validateIsCar(car);
    });

    const numOfCars = cars.length;

    cars.sort((carA, carB) => carA.distance - carB.distance);

    const distanceOfWinner = cars[numOfCars - 1].distance;
    const winningCars = cars.filter((car) => car.distance === distanceOfWinner);

    return winningCars;
  }

  static getDriverNames(cars) {
    Validator.validateIsArray(cars);

    cars.forEach((car) => {
      Validator.validateIsCar(car);
    });

    return cars.map((car) => car.driverName);
  }

  static playRound(cars) {
    Validator.validateIsArray(cars);

    cars.forEach((car) => {
      Validator.validateIsCar(car);
    });

    cars.forEach((car) => {
      const randomNumber = Referee.generateRandomNumber();

      if (randomNumber >= GAME_CONSTANT.THRESHOLD) {
        car.move();
      }
    });
  }

  static generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(
      GAME_CONSTANT.RANDOM_START,
      GAME_CONSTANT.RAMDOM_END,
    );
  }
}

export default Referee;
