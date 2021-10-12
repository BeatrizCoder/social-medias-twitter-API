import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Tweet, Prisma } from '.prisma/client';

@Injectable()
export class TweetsService {
  constructor(private db: PrismaService) {}

  async find(username?: string): Promise<Tweet[]> {
    if (username) {
      const user = await this.db.user.findUnique({
        where: { username },
      });
      if (!user) {
        throw new NotFoundException(' does not exist a user with this name');
      }
    }
    const tweets = await this.db.tweet.findMany({
      where: {},
      orderBy: { createdAt: 'desc' },
    });

    return tweets;
  }
  async findOneTweet(id: number): Promise<Tweet> {
    const tweet = await this.db.tweet.findUnique({ where: { id } });

    if (!tweet) {
      throw new NotFoundException('thre is not teet found for this ID');
    }
    return tweet;
  }
  post(data: Prisma.TweetCreateInput): Promise<Tweet> {
    return this.db.tweet.create({ data: data });
  }
  async delete(id: number): Promise<void> {
    const tweet = await this.db.tweet.findUnique({ where: { id } });
    if (!tweet) {
      throw new NotFoundException();
    }
    if (tweet.id !== id) {
      throw new ForbiddenException();
    }
    await this.db.tweet.delete({ where: { id } });
  }
}
