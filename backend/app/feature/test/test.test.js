const request = require('supertest')
const app = require('../../index')

jest.setTimeout(3000)

describe('Test is an example to me', () => {
  test('should finish sucessful', async () => {
    expect(1 + 1).toBe(2)
  })
})

app.close()
