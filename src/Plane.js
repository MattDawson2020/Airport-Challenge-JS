class Plane {
  constructor(isFlying = true) {
    this.isFlying = isFlying
  };

  land() {
    this.isFlying = false
  };

  takeOff() {
    this.isFlying = true
  }
};
