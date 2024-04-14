import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { SampleController } from './controllers/SampleController';
import { ContactController } from './controllers/contact.controller';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { ContactResolver } from './graphql/resolvers/contact.resolver';
useContainer(Container);

const app = createExpressServer({
  controllers:[SampleController,ContactController]
});

async function main() {
  const schema = await buildSchema({
    resolvers: [ContactResolver],
    validate: false,
    container: Container,
  });

  const server = new ApolloServer({ schema });
  await server.start()

  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(3002, () => {
    console.log('Server is running on port 3002');
  });
}

main().catch((error) => {
  console.log(error, 'error');
});

