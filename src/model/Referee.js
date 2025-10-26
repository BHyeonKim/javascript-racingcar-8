import Validator from '../Validator.js';

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
}

export default Referee;
