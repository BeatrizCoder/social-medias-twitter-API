import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { FollowsModule } from './follows/follows.module';
import { TweetModule } from './tweets/tweets.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [AuthModule, UserModule, FollowsModule, TweetModule, LikesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
