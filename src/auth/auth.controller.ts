import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { User } from '.prisma/client';
import { AuthUser } from 'src/common/decorators/auth-user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@AuthUser() user: User): User {}
}
