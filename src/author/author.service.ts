import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}
  async getAuthor(dto: any) {
    try {
      let { token } = dto;
      let valid = await this.prisma.verifyToken(
        token,
      );

      if (valid) {
        const authorCount =
          await this.prisma.author.count();
        const skip = Math.floor(
          Math.random() * authorCount,
        );
        let author =
          await this.prisma.author.findMany({
            take: 2,
            skip,
            orderBy: {
              authorId: 'desc',
            },
          });

        //   making delay of 5 seconds to send response
        return of(
          author.length
            ? author[0]
            : {
                success: false,
                data: {
                  error: 'No Entries found',
                },
              },
        ).pipe(delay(5000));
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
