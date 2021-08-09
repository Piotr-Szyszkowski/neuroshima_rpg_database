const { TestWatcher } = require("jest");
const request = require("supertest");
const allEndpoints = require("../all-endpoints");
const app = require("../app");

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
