import request from "supertest";
import app from "../server";

describe("GET /characters", () => {
  it("should respond with a 200 status code", async () => {
    const response = await request(app).get("/characters");
    expect(response.status).toBe(200);
  });

  it("should respond with an object", async () => {
    const response = await request(app).get("/characters").send();
    expect(typeof response.body).toBe("object");
  });
});
