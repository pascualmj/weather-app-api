const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("Test /location endpoint", () => {
  let response;

  beforeAll(async (done) => {
    response = await request.get("/v1/location");
    done();
  });

  test("Endpoint /location returns status 200.", () => {
    expect(response.status).toBe(200);
  });

  test("Endpoint /location returns an object with city, lat and lon properties.", () => {
    expect(response.body).toMatchObject({
      city: expect.any(String),
      lat: expect.any(Number),
      lon: expect.any(Number),
    });
  });
});
