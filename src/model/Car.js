class Car {
  #driverName;

  #distance;

  constructor(driverName) {
    this.#driverName = driverName;
    this.#distance = 0;
  }

  move() {
    this.#distance += 1;
  }

  get driverName() {
    return this.#driverName;
  }

  get distance() {
    return this.#distance;
  }
}

export default Car;
