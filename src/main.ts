import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from 'src/shared/constants/environments';
import { DomainExceptionFilter } from './config/filters/domainExceptionsFilters';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new DomainExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT ?? 3000);
}
bootstrap();
