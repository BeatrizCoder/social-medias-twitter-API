import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nome: string;
  @IsString()
  imagem: string;
  @IsString()
  bio: string;
  @IsString()
  birth: string;
  @IsNumber()
  followers: number;
  @IsNumber
  following: number;
  @IsNumber
  create_on: number;
  @IsNumber
  updated_on: number;
  @IsNumber
  tweet: number;
}
