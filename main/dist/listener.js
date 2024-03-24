"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [
                'amqps://mmzxtoqq:o7U3a23vrTm9qoRAm8uqiSFZTmH9J4bp@jackal.rmq.cloudamqp.com/mmzxtoqq',
            ],
            queue: 'main_queque',
            queueOptions: {
                durable: false,
            },
        },
    });
    app.listen();
}
bootstrap();
//# sourceMappingURL=listener.js.map