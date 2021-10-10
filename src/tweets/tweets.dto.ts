import { IsString, Length, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @Length(1, 140)
  text: string;

  @IsNotEmpty()
  createdAt: string;

  @IsNotEmpty()
  updatedAt: string;

  @IsOptional()
  likes: number[];

  @IsOptional()
  User: string;

  @IsNotEmpty()
  userId: number;

}
Write to Aventuras do Valente
