import { BandStatus } from '@common/enum/band-status';
import { ApiProperty } from '@nestjs/swagger';

export class BandResponseDto {
  @ApiProperty({ required: true }) bandId: string;
  @ApiProperty({ required: true }) createdAt: Date;
  @ApiProperty({ required: true }) bandName: string;
  @ApiProperty({ required: true }) description: string;
  @ApiProperty({ required: true }) votes: number;
  @ApiProperty({ required: true }) status: BandStatus;
}