import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class QuoteService {
  constructor(private prisma: PrismaService) {}
  async getQuote(dto: any) {
    try {
      let { token, authorId } = dto;
      let valid = await this.prisma.verifyToken(
        token,
      );

      if (valid) {
        // generating random quote
        let quote =
          await this.prisma.quote.findFirst({});

        //   making delay of 5 seconds to send response
        return of(quote).pipe(delay(5000));
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
