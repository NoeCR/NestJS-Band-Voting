import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BandModule } from './band/band.module';

const MODULES = [ConfigModule, BandModule];
const SERVICES = [ConfigService];

@Module({
  imports: [...MODULES],
  controllers: [],
  providers: [...SERVICES],
})
export class AppModule {}
