import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

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

      if (randomNumber >= 4) {
        car.move();
      }
    });
  }

  static generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}

export default Referee;
