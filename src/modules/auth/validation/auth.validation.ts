import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthValidation {
  @ApiProperty({ name: 'email', type: 'string', example: 'email@email.com' })
  @IsEmail({}, { message: 'O e-mail é invalido!' })
  email: string;
  @ApiProperty({ name: 'password', type: 'string', example: 'MyPassword123@' })
  @IsNotEmpty({ message: 'Senha invalida!' })
  password: string;
}
