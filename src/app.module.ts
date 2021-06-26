import configuration from '@config/configuration';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BandModule } from './band/band.module';
import { ProvidersModule } from './db/providers/providers.module';
import { BandMongodbModule } from './db/band-mongodb/band-mongodb.module';

const MODULES = [ConfigModule.forRoot({ load: [configuration] }), BandModule, ProvidersModule];

const SERVICES = [];

@Module({
  imports: [...MODULES, BandMongodbModule],
  controllers: [],
  providers: [...SERVICES],
})
export class AppModule { }
