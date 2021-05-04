class Airport {

  constructor(weather = new Weather, capacity = 20) {
    this.weather = weather
    this.hangar = []
    this.defaultCapacity = capacity
  };

  land(plane) {
    if(this.weather.isStormy() === true) {
      throw new Error( "Cannot land in a storm");
    };
    this.hangar.push(plane)
    plane.land();
  };

  takeOff(plane) {
    if(this.weather.isStormy() === true) {
      throw new Error( "Cannot takeoff in a storm");
    };
    this.hangar.pop(plane)
    plane.takeOff;
  };

};
