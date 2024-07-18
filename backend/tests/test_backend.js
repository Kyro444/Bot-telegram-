const request = require('supertest');
const express = require('express');

const app = express();

describe('POST /bot', () => {
    it('responds with 200', (done) => {
        request(app)
            .post('/bot12345')
            .send({
                message: {
                    chat: { id: 1 },
                    text: '/start'
                }
            })
            .expect(200, done);
    });
})
