import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 8484;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(`app is running on port ${PORT}`);
}

bootstrap();
