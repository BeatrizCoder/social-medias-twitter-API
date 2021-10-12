import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber
  Tweet: number;
  @IsNumber
  id: number;
  @IsNumber
  tweetId: number;
  @IsString
  User: string;
  @IsString
  userId: number;
}
