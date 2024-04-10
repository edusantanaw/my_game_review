import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserValidation {
  @ApiProperty({ name: 'name', type: 'string', example: 'Hello World' })
  @IsNotEmpty({ message: 'O nome é necessario!' })
  name: string;
  @ApiProperty({ name: 'email', type: 'string', example: 'email@email.com' })
  @IsEmail({}, { message: 'O e-mail é invalido!' })
  email: string;
  @ApiProperty({ name: 'password', type: 'string', example: 'MyPassword123@' })
  @IsNotEmpty({ message: 'A senha é necessaria!' })
  password: string;
}
