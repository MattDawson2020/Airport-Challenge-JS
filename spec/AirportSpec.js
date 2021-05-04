describe("Airport", function() {
  let airport;
  let plane;
  let weather;

  beforeEach(function() {
    airport = new Airport
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff', 'isFlying'])
    // weather = wether double
  });

  it("Can store planes", function() {
    expect(airport.hangar.length).toEqual(0)
  });

  it("can have a weather object", function() {
    let storm = airport.weather.isStormy()
    expect(storm).toMatch(/true|false/)
  });

  it("Has default capacity", function() {
    expect(airport.defaultCapacity).toEqual(20)
  });

  it("Can land planes and return them", function() {
    airport.land(plane);
    expect(airport.hangar.length).toEqual(1)
  });

  it("can allow a plan to takeoff", function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.hangar.length).toEqual(0)
  });

});
