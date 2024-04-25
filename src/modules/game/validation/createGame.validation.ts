import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateGameValidation {
  @IsNotEmpty({ message: 'O nome é obrigatorio!' })
  @MinLength(2, { message: 'O nome é invalido!' })
  name: string;
  @IsNotEmpty({ message: 'A desenvolvedora é obrigatoria!' })
  @MinLength(2, { message: 'A desenvolvedora é invalida!' })
  publisher: string;
  @IsNotEmpty({ message: 'A data de lançamento é obrigatoria!' })
  release: string;
  @IsNotEmpty({ message: 'A categorias são obrigatorias!' })
  @MinLength(1, { message: 'Categoria invalida!' })
  categories: string[];
}
