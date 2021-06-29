import { Module } from '@nestjs/common';
import { BandService } from './band.service';

@Module({
  providers: [BandService],
  exports: [BandService],
})
export class BandModule { }
