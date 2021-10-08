const supertest = require('supertest');
const server = require('./server');

test('GET / returns a message', async () => {
  const result = await supertest(server).get('/').expect(200);
  expect(result.body.message).toEqual('Hello, PFK 2!');
});
