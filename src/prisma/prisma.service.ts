import {
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';
import * as jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }

  async verifyToken(token: string): Promise<any> {
    try {
      const secret =
        this.config.get('JWT_SECRET');
      const decoded = await jwt.verify(
        token,
        secret,
      );
      return decoded;
    } catch (err) {
      return false
    }
  }
}
