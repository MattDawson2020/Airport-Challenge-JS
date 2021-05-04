describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("Starts flying", function() {
    expect(plane.isFlying).toEqual(true)
  });

  it("Can land", function() {
    plane.land()
    expect(plane.isFlying).toEqual(false)
  });

  it("Can takeoff", function() {
    plane = new Plane(false);
    plane.takeOff()
    expect(plane.isFlying).toEqual(true)
  });
  
});
