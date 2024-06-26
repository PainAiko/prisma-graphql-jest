import 'reflect-metadata';
import request from 'supertest';
import { createExpressServer } from 'routing-controllers';
import { SampleController } from '../controllers/SampleController';

const app = createExpressServer({
    controllers: [SampleController],
});

describe('SampleController', () => {
    it('should return sample data', async () => {
        const response = await request(app).get('/sample');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello, testing is enabled! hihi');
    });
});