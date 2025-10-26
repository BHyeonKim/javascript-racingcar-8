import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from './utils/Validator.js';

class View {
  static async getInput(query) {
    const input = await MissionUtils.Console.readLineAsync(query);
    return input;
  }

  static print(message = '') {
    MissionUtils.Console.print(message);
  }

  static printEmptyLine() {
    View.print();
  }

  static printCarState(car) {
    Validator.validateIsCar(car);

    const distance = '-'.repeat(car.distance);

    View.print(`${car.driverName} : ${distance}`);
  }
}

export default View;
