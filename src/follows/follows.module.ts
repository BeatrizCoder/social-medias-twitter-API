import { Module } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { FollowsController } from './follows.controller';

@Module({
  providers: [FollowsService],
  controllers: [FollowsController],
})
export class FollowsModule {}
