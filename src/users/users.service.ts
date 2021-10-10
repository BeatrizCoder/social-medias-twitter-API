import { Injectable, NotFoundException, ConflictException, } from '@nestjs/common';
import{User,prisma} from '.prisma/client';
import{Prisma Service} from '../prisma.service';
import * as bcrypt;

@Injectable()
export class UserService {
    constructor(private db:PrismaService){}

    async findMany():Promise<User[]>{
        return this.db.user.findMany();
    }
    async findUnique(id:number):Promise<User>{
        const user=await this.db.user.findUnique({
            where:{id},
        });
        if (!user){
            throw new NotFoundException();
        }
        return user;
    }
    async create(data:Prisma.UserCreateInput):Promise<User>{
        const existing=await this.db.user.findUnique({
            where:{username:data.username},
        });
        if(existing){
            throw new ConflictException('username already exists');
        }
        const hashedPassword=await bcrypt.hash(data.passaword,8);

        const user=await this.db.user.create({
            data:{
                ...data,
                senha:hashedPassword,
            },
        });
        return user;
    }
    async deleteOneUser(where:Prisma.UserWhereUniqueInput):Promise<User>{
        return this.db.user.delete({where});
    }
}
