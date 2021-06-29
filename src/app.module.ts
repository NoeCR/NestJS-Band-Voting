import configuration from '@config/configuration';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiBandModule } from './band/band.module';
import { ProvidersModule } from './db/providers/providers.module';
import { BandMongodbModule } from './db/band-mongodb/band-mongodb.module';
import { BandModule } from './common/services/band/band.module';

const MODULES = [ConfigModule.forRoot({ load: [configuration] }), ApiBandModule, ProvidersModule, BandModule];

const SERVICES = [];

@Module({
  imports: [...MODULES, BandMongodbModule],
  controllers: [],
  providers: [...SERVICES],
})
export class AppModule { }
