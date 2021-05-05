describe("Airport", function() {
  let airport;
  let plane;
  let weather;

  beforeEach(function() {
    airport = new Airport
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff', 'isFlying'])
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
  it("Has default capacity", function() {
    biggerAirport = new Airport(new Weather, 50);
    expect(biggerAirport.defaultCapacity).toEqual(50)
  });

  it("Can land planes and return them", function() {
    airport.land(plane);
    expect(airport.hangar.length).toEqual(1)
  });

  it("Raises an error if you land in storm", function() {
    spyOn(airport.weather, "isStormy").and.returnValue(true);
    expect(function() {airport.land(plane) }).toThrowError(Error, "Cannot land in a storm")
  });

  it("can allow a plan to takeoff", function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.hangar.length).toEqual(0)
  });

  it("Raises an error if you takeoff in storm", function() {
    airport.land(plane);
    spyOn(airport.weather, "isStormy").and.returnValue(true);
    expect(function() {airport.takeOff(plane) }).toThrowError(Error, "Cannot takeoff in a storm")
  });

});
