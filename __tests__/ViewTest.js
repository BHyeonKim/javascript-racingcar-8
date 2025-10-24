import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../src/View';

jest.mock('@woowacourse/mission-utils', () => ({
  MissionUtils: {
    Console: {
      readLineAsync: jest.fn(),
      print: jest.fn(),
    },
  },
}));

describe('View Class', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getInput Method', () => {
    it('should call MissionUtils.Console.readLineAsync', async () => {
      const mockUserInput = 'test';

      MissionUtils.Console.readLineAsync.mockResolvedValue(mockUserInput);

      const userInput = await View.getInput();

      expect(MissionUtils.Console.readLineAsync).toHaveBeenCalled();

      expect(userInput).toBe(mockUserInput);
    });

    it('should call MissionUtils.Console.readLineAsync with query', async () => {
      const mockUserInput = 'test';

      MissionUtils.Console.readLineAsync.mockResolvedValue(mockUserInput);

      const testQuery = 'This is test query.';

      const userInput = await View.getInput(testQuery);

      expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
        testQuery,
      );

      expect(userInput).toBe(mockUserInput);
    });
  });

  describe('print Method', () => {
    it('should call MissionUtils.Console.print', () => {
      View.print();

      expect(MissionUtils.Console.print).toHaveBeenCalled();
    });

    it('should call MissionUtils.Console.print with message', () => {
      const testMessage = 'This is test message.';

      View.print(testMessage);

      expect(MissionUtils.Console.print).toHaveBeenCalledWith(testMessage);
    });
  });
});
