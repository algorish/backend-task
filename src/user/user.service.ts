import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileDto } from './dto/profile.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getProfile(dto: ProfileDto) {
    try {
      let { token } = dto;
      let valid = await this.prisma.verifyToken(
        token,
      );

      if (valid) {
        let user = this.prisma.user.findUnique({
          where: {
            id: valid.sub,
          },
        });

        delete (await user).password;
        delete (await user).id;
        return user;
      } else {
        return {
          success: false,
          data: {
            error: 'Invalid token',
          },
        };
      }
    } catch (e) {
      throw e;
    }
  }
}
