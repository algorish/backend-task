import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('')
export class AuthorController {
  constructor(
    private authorService: AuthorService,
  ) {}

  @Get('author')
  getAuthor(@Query() dto: any) {
    return this.authorService.getAuthor(dto);
  }
}
