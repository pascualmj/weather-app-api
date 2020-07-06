const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("Test /current endpoint", () => {
  let response = {};

  beforeAll(async (done) => {
    response.bareCurrentWeather = await request.get("/v1/current");
    response.cityCurrentWeather = await request.get("/v1/current/Rosario");
    done();
  });

  test("Endpoint /current returns status 200.", () => {
    expect(response.bareCurrentWeather.status).toBe(200);
  });

  test("Endpoint /current returns an object with weather, coord and name properties.", () => {
    expect(response.bareCurrentWeather.body).toMatchObject({
      coord: expect.any(Object),
      weather: expect.any(Array),
      name: expect.any(String),
    });
  });

  test("Endpoint /current/Rosario returns status 200.", () => {
    expect(response.cityCurrentWeather.status).toBe(200);
  });

  test("Endpoint /current/Rosario returns an object weather, coord and name properties.", () => {
    expect(response.cityCurrentWeather.body).toMatchObject({
      coord: expect.any(Object),
      weather: expect.any(Array),
      name: expect.any(String),
    });
  });
});
