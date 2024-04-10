import { ApiResponseOptions } from '@nestjs/swagger';

export const DomainSchemaExceptionFilter: ApiResponseOptions = {
  status: 400,
  description: 'Erro em validações!',
  schema: {
    examples: [
      {
        message: 'Usuario não encontrado!',
        type: 'NotFoundException',
      },
      {
        message: ['O e-mail é invalido!', 'Senha invalida!'],
        type: 'HttpException',
      },
    ],
    example: {
      message: ['O e-mail é invalido!', 'Senha invalida!'],
      type: 'HttpException',
    },
  },
};
