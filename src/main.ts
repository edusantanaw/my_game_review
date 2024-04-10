import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { PORT } from 'src/shared/constants/environments';
import { AppModule } from './app.module';
import { DomainExceptionFilter } from './config/filters/domainExceptionsFilters';
import { GlobalExceptionFilter } from './config/filters/validationExceptionFilter';
import swagger from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(
    new GlobalExceptionFilter(),
    new DomainExceptionFilter(),
  );
  app.useGlobalPipes(new ValidationPipe());
  const doc = SwaggerModule.createDocument(app, swagger());
  SwaggerModule.setup('api', app, doc);
  await app.listen(PORT ?? 3000);
}
bootstrap();
