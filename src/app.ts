import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { SampleController } from './controllers/SampleController';

useContainer(Container);

const app = createExpressServer({
  controllers:[SampleController]
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});