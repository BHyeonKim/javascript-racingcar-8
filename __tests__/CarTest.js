import Car from '../src/models/Car.js';

const INITIAL_DISTANCE = 0;

describe('Car class', () => {
  let car;
  const driverName = 'BHyeon';

  beforeEach(() => {
    car = new Car(driverName);
  });

  it('should store driver name correctly', () => {
    car = new Car(driverName);

    expect(car.driverName).toBe(driverName);
  });

  it('should have 0 distance after initialization', () => {
    car = new Car(driverName);

    expect(car.distance).toBe(INITIAL_DISTANCE);
  });

  it('should increase distance by 1 when move is called once', () => {
    car = new Car(driverName);

    expect(car.distance).toBe(INITIAL_DISTANCE);

    car.move();

    expect(car.distance).toBe(INITIAL_DISTANCE + 1);
  });

  it('should increase distance by 2 when move is called twice', () => {
    car = new Car(driverName);

    expect(car.distance).toBe(INITIAL_DISTANCE);

    car.move();
    car.move();

    expect(car.distance).toBe(INITIAL_DISTANCE + 2);
  });
});
