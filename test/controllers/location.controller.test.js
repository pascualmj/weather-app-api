const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const proxyquire = require("proxyquire");
const sinon = require("sinon");

chai.use(chaiAsPromised);

describe("Controller: location", () => {
  it("Should return location data successfully.", async () => {
    const location = proxyquire("../../src/controllers/location.controller.js", {
      "../services/locationClient.js": {
        getLocation: sinon.fake.resolves({ data: "a" }),
      },
    });

    const jsonStub = sinon.spy();

    const res = {
      status: sinon.fake.returns({
        json: jsonStub,
      }),
    };

    await location(null, res);
    chai.expect(jsonStub.firstCall.args[0]).to.eql("a");
  });

  it("Should return an error calling the next middleware.", async () => {
    const location = proxyquire("../../src/controllers/location.controller.js", {
      "../services/locationClient.js": {
        getLocation: () => {
          throw {};
        },
      },
    });

    const next = sinon.spy();

    await location(null, null, next);
    chai.expect(next.calledOnce).to.equal(true);
  });
});
