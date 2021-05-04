describe("Airport", function() {
  let airport;
  let plane;
  let weather;

  beforeEach(function() {
    airport = new Airport
    // plane = plane double
    // weather = wether double
  });

  it("Can store planes", function() {
    expect(airport.hangar.length).toEqual(0)
  });

  it("can have a weather object", function() {
    let storm = airport.weather.isStormy()
    console.log(storm)
    expect(storm).toMatch(/true|false/)
  });


});