const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const proxyquire = require("proxyquire");
const sinon = require("sinon");

chai.use(chaiAsPromised);

describe("Controller: weather", () => {
  it("Should return weather data successfully.", async () => {
    const weather = proxyquire("../../src/controllers/weather.controller.js", {
      "../services/weatherClient.js": {
        getCurrentWeather: sinon.fake.resolves({ data: "p" }),
      },
    });

    const jsonStub = sinon.spy();

    const req = { city: "g" };

    const res = {
      status: sinon.fake.returns({
        json: jsonStub,
      }),
    };

    await weather(req, res);
    chai.expect(jsonStub.firstCall.args[0]).to.eql("p");
  });

  it("Should return an error calling the next middleware.", async () => {
    const weather = proxyquire("../../src/controllers/weather.controller.js", {
      "../services/weatherClient.js": {
        getCurrentWeather: sinon.fake.throws("h"),
      },
    });

    const next = sinon.spy();

    await weather(null, null, next);
    chai.expect(next.calledOnce).to.equal(true);
  });
});
