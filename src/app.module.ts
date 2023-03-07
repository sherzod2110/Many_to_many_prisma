import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { prismaModule } from './prisma/prisma.module';
import { UsersModule } from './module/users/users.module';
import { BanksModule } from './module/banks/banks.module';

@Module({
  imports: [ConfigModule.forRoot(config), prismaModule, UsersModule, BanksModule],
})
export class AppModule {}
