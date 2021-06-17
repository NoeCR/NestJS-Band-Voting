import { Module } from '@nestjs/common';
import { BandController } from './controller/band.controller';

@Module({
  controllers: [BandController],
})
export class BandModule { }
