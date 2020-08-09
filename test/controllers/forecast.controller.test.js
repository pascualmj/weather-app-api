const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const proxyquire = require("proxyquire");
const sinon = require("sinon");

chai.use(chaiAsPromised);

describe("Controller: forecast", () => {
  it("Should return forecast data successfully.", async () => {
    const forecast = proxyquire("../../src/controllers/forecast.controller.js", {
      "../services/weatherClient.js": {
        getCurrentWeather: sinon.fake.resolves({
          data: {
            coord: { lat: 1, lon: 2 },
          },
        }),
        getWeatherForecast: sinon.fake.resolves({ data: "a" }),
      },
    });

    const jsonStub = sinon.spy();

    const req = { city: "l" };

    const res = {
      status: sinon.fake.returns({
        json: jsonStub,
      }),
    };

    await forecast(req, res);
    chai.expect(jsonStub.firstCall.args[0]).to.eql("a");
  });

  it("Should return an error calling the next middleware.", async () => {
    const forecast = proxyquire("../../src/controllers/forecast.controller.js", {
      "../services/weatherClient.js": {
        getCurrentWeather: sinon.fake.throws("c"),
        getWeatherForecast: sinon.fake.resolves({ data: "a" }),
      },
    });

    const next = sinon.spy();

    await forecast(null, null, next);
    chai.expect(next.calledOnce).to.equal(true);
  });
});
