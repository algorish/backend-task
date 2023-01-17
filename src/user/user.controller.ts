import {
  Controller,
  UseGuards,
  Get,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { ProfileDto } from './dto/profile.dto';

@Controller('')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('info')
  getInfo() {
    return {
      success: true,
      data: {
        info: 'Some information about the <b>company</b>.',
      },
    };
  }

  @Get('profile')
  getProfile(@Query() dto: ProfileDto) {
    return this.userService.getProfile(dto);
  }
}
