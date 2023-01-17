import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TokenModule } from './token/token.module';
import { AuthorModule } from './author/author.module';
import { QuoteModule } from './quote/quote.module';

@Module({
  imports: [AuthModule, UserModule, TokenModule, AuthorModule, QuoteModule],
})
export class AppModule {}
