import { BandStatus } from './../../common/enum/band-status';
import { ApiProperty } from "@nestjs/swagger";


export class UpdateBandDto {
  @ApiProperty({ required: false }) bandName: string;
  @ApiProperty({ required: false }) description: string;
  @ApiProperty({ required: false }) status: BandStatus;
  @ApiProperty({ required: false }) votes: number;
}