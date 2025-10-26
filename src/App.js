import MESSAGES from './constants/message.js';
import Parser from './utils/Parser.js';
import View from './View.js';
import Car from './models/Car.js';
import Referee from './models/Referee.js';
import ERROR_MESSAGE from './constants/error.js';

class App {
  async run() {
    try {
      const firstInput = await View.getInput(MESSAGES.ASK_DRIVER_NAMES);
      const driverNames = Parser.parsePlayersFromString(firstInput);
      const cars = driverNames.map((driverName) => new Car(driverName));

      const secondInput = await View.getInput(MESSAGES.ASK_NUM_OF_ROUND);
      const numOfRounds = Parser.parseRound(secondInput);

      View.printEmptyLine();
      View.print(MESSAGES.ANNOUNCE_RESULT);

      for (
        let currentRound = 1;
        currentRound <= numOfRounds;
        currentRound += 1
      ) {
        Referee.playRound(cars);

        cars.forEach((car) => View.printCarState(car));
        View.printEmptyLine();
      }

      const winningCars = Referee.getWinningCars(cars);
      const winningDrivers = Referee.getDriverNames(winningCars).join(', ');

      View.print(`${MESSAGES.ANNOUNCE_WINNER} ${winningDrivers}`);
    } catch (error) {
      let errorMessage = ERROR_MESSAGE.PREFIX;

      if (error instanceof Error) {
        errorMessage += error.message;
      } else {
        errorMessage += ERROR_MESSAGE.RUNTIME;
      }

      throw new Error(errorMessage);
    }
  }
}

export default App;
