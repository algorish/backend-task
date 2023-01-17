import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {
  logout(dto: any) {
    return {
      success: true,
      data: {},
    };
  }
}
