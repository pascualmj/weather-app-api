const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const proxyquire = require("proxyquire");
const sinon = require("sinon");

chai.use(chaiAsPromised);

describe("Middleware: extractCity", () => {
  describe("Should add city prop to request object and call next middleware.", () => {
    it("From the location service.", async () => {
      const weather = proxyquire("../../src/middlewares/extractCity.mw.js", {
        "../services/locationClient.js": {
          getLocation: sinon.fake.resolves({
            data: {
              city: "ipsum",
            },
          }),
        },
      });

      const next = sinon.spy();

      const req = { params: {} };

      await weather(req, null, next);
      chai.expect(req.city).to.eql("ipsum");
      chai.expect(next.calledOnce).to.equal(true);
    });

    it("From the request params object.", async () => {
      const weather = require("../../src/middlewares/extractCity.mw");

      const next = sinon.spy();

      const req = {
        params: {
          city: "world",
        },
      };

      await weather(req, null, next);
      chai.expect(req.city).to.eql("world");
      chai.expect(next.calledOnce).to.equal(true);
    });
  });

  it("Should return an error calling the next middleware.", async () => {
    const weather = proxyquire("../../src/middlewares/extractCity.mw.js", {
      "../services/locationClient.js": {
        getLocation: sinon.fake.throws("o"),
      },
    });

    const next = sinon.spy();

    const req = {
      params: {
        city: "a",
      },
    };

    await weather(req, null, next);
    chai.expect(next.calledOnce).to.equal(true);
  });
});
