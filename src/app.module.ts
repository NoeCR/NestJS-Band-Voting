import configuration from '@config/configuration';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BandModule } from './band/band.module';

const MODULES = [ConfigModule.forRoot({ load: [configuration] }), BandModule];
const SERVICES = [];

@Module({
  imports: [...MODULES],
  controllers: [],
  providers: [...SERVICES],
})
export class AppModule { }
