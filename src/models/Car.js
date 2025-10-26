class Car {
  #driverName;

  #distance;

  constructor(driverName, distance = 0) {
    this.#driverName = driverName;
    this.#distance = distance;
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
