import {
  Controller,
  Delete,
  Query,
} from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('')
export class TokenController {
  constructor(
    private tokenService: TokenService,
  ) {}

  @Delete('logout')
  register(@Query() dto: any) {
    return this.tokenService.logout(dto);
  }
}
