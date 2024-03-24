import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://mmzxtoqq:o7U3a23vrTm9qoRAm8uqiSFZTmH9J4bp@jackal.rmq.cloudamqp.com/mmzxtoqq',
        ],
        queue: 'main_queque',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  app.listen();
}
bootstrap();
