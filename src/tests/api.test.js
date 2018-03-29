const request = require('supertest');
const app = require('../api/index');

describe('test create trip', () => {
  test('It should return 201 after POST method', () => {
    return request(app).post("/api/trips").then(response => (
      expect(response.statusCode).toBe(201)
    ))
  });
  }
)
