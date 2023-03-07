import { DatabaseConfig } from './database/index';
import { AppConfig } from './app/index';
import { ConfigModule } from '@nestjs/config/dist';

export const config: ConfigModule = {
  load: [AppConfig, DatabaseConfig],
  isGlobal: true,
  cache: true,
};
