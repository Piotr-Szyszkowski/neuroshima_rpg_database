const db = require("../db/connection");
const request = require("supertest");
const allEndpoints = require("../all-endpoints");
const app = require("../app");

afterAll(() => {
  db.end();
});

describe(`GET /api`, () => {
  it("responds with status:200 and a JSON object describing all endpoints", () => {
    return request(app)
      .get(`/api`)
      .expect(200)
      .then((response) => {
        expect(response.body.endpoints).toEqual(allEndpoints);
      });
  });
});

describe(`GET /api/professions`, () => {
  it("responds with status:200 and an array of profession objects", () => {
    return request(app).get(`/api/professions`).expect(200);
  });
});
