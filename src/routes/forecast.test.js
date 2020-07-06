const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("Test /forecast endpoint", () => {
  let response = {};

  beforeAll(async (done) => {
    response.bareForecast = await request.get("/v1/forecast");
    response.cityForecast = await request.get("/v1/forecast/Rosario");
    done();
  });

  test("Endpoint /forecast returns status 200.", () => {
    expect(response.bareForecast.status).toBe(200);
  });

  test("Endpoint /forecast returns an object with lat, lon and daily properties.", () => {
    expect(response.bareForecast.body).toMatchObject({
      lat: expect.any(Number),
      lon: expect.any(Number),
      daily: expect.any(Array),
    });
  });

  test("Endpoint /forecast/Rosario returns status 200.", () => {
    expect(response.cityForecast.status).toBe(200);
  });

  test("Endpoint /forecast/Rosario returns an object with lat, lon and daily properties.", () => {
    expect(response.cityForecast.body).toMatchObject({
      lat: expect.any(Number),
      lon: expect.any(Number),
      daily: expect.any(Array),
    });
  });
});
