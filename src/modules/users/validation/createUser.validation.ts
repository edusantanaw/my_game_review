import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserValidation {
  @IsNotEmpty({ message: 'O nome é necessario!' })
  name: string;
  @IsEmail({}, { message: 'O e-mail é invalido!' })
  email: string;
  @IsNotEmpty({ message: 'A senha é necessaria!' })
  password: string;
}
