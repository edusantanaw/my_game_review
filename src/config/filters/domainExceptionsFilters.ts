import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { DefaultException } from 'src/shared/exceptions/default.exception';
import { DomainException } from 'src/shared/exceptions/domain.exception';
import { Response } from 'express';
import { NotFoundException } from 'src/shared/exceptions/notFound.exception';

@Catch(DefaultException, DomainException, NotFoundException)
export class DomainExceptionFilter implements ExceptionFilter {
  catch(exception: DefaultException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    if (exception instanceof DomainException)
      return response
        .status(400)
        .json({ message: exception.message, type: exception.typeError });
    if (exception instanceof NotFoundException)
      return response
        .status(400)
        .json({ message: exception.message, type: exception.typeError });
    return response.status(500).send('Internal Server Error');
  }
}
