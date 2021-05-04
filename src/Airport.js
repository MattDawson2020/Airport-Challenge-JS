class Airport {

  constructor(weather = new Weather, capacity = 20) {
    this.weather = weather
    this.hangar = []
    this.defaultCapacity = capacity
  };

  land(plane) {
    if(this.weather.isStormy() === true) {
      throw new Error( "Cannot land in storm");
    };
    this.hangar.push(plane)
    plane.land();
  };

  takeOff(plane) {
    this.hangar.pop(plane)
    plane.takeOff;
  };

};
