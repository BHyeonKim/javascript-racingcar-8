import Car from '../src/models/Car.js';

const INITIAL_DISTANCE = 0;

describe('Car class', () => {
  let car;
  const driverName = 'BHyeon';

  beforeEach(() => {
    car = new Car(driverName);
  });

  it.each([
    ['BHyeon', 'English name'],
    ['포비', 'Korean name'],
    ['a', 'single character'],
    ['12345', 'numbers'],
  ])('should store driver name correctly: %s (%s)', (name) => {
    car = new Car(name);
    expect(car.driverName).toBe(name);
  });

  it('should have 0 distance after initialization', () => {
    car = new Car(driverName);

    expect(car.distance).toBe(INITIAL_DISTANCE);
  });

  it.each([
    [1, 1, 'called once'],
    [2, 2, 'called twice'],
    [3, 3, 'called three times'],
    [5, 5, 'called five times'],
  ])(
    'should increase distance by %i when move is called %s',
    (callCount, expectedDistance) => {
      car = new Car(driverName);

      expect(car.distance).toBe(INITIAL_DISTANCE);

      for (let i = 0; i < callCount; i += 1) {
        car.move();
      }

      expect(car.distance).toBe(expectedDistance);
    },
  );

  it('should accumulate distance correctly with initial distance', () => {
    const initialDistance = 5;
    car = new Car(driverName, initialDistance);

    expect(car.distance).toBe(initialDistance);

    car.move();
    car.move();

    expect(car.distance).toBe(initialDistance + 2);
  });
});
