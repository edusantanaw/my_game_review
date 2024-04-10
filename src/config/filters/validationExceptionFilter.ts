import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException, Error)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException | Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    if (exception instanceof HttpException) {
      const exceptionResponse = exception.getResponse() as {
        message: string[];
      };
      return response
        .status(exception.getStatus())
        .json({ message: exceptionResponse.message, type: 'HttpException' });
    }
    return response.status(500).send('Internal Server Error');
  }
}
