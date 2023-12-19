import { IsString, IsNumber, IsNotIn, ArrayNotEmpty, Length } from "class-validator";

const valIsNotIn = ["valor1", "valor2", "valor3"];

export class SaveDto {
  @IsString()
  @Length(4, 20)
  title?: string ;

  @IsString()
  description?: string ;

  @IsNumber()
  @IsNotIn(valIsNotIn)
  @ArrayNotEmpty()
  idsave?: number[] ;

  @IsNumber()
  @IsNotIn(valIsNotIn)
  id_user?: number ;
}

export class delateSaveDto {
  @IsString()
  @Length(4, 20)
  id?: string;
}
