import { MissionUtils } from '@woowacourse/mission-utils';

class View {
  static async getInput(query) {
    const input = await MissionUtils.Console.readLineAsync(query);
    return input;
  }

  static print(message) {
    MissionUtils.Console.print(message);
  }
}

export default View;
