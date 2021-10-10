import { IsNumber, IsString} from "class-validator";

export class CreateUserDto{
    @IsNumber
    id:number;
    @IsNumber
    Tweet:number;
    @IsNumber
    id:number;
    @IsNumber
    tweetId:number;
    @IsString
    User:string;
    @IsString
    userId:number;
