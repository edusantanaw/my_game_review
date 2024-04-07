import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthValidation {
  @IsEmail({}, { message: 'E-mail invalido!' })
  email: string;
  @IsNotEmpty({ message: 'Senha invalida!' })
  password: string;
}
