import request from "supertest";
import app from "../server";

describe("GET /countries", () => {
  it("should respond with a 200 status code", async () => {
    const response = await request(app).get("/countries"); 
    expect(response.status).toBe(200);
  });
});
