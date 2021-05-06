describe("Weather", function() {
  let weather;

  beforeEach(function() {
    weather = new Weather;
  });

  it("can be stormy", function() {
    expect(weather.isStormy()).toMatch(/true|false/)
  });

});
