import { EBandStatus } from '@common/enum/band-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBandDto {
  @ApiProperty({ required: true }) bandName: string;
  @ApiProperty({ required: true }) description: string;
  @ApiProperty({ required: false }) votes: number;
}

export class CreateBandResponseDto {
  @ApiProperty({ required: true }) bandId: string;
  @ApiProperty({ required: true }) createdAt: Date;
  @ApiProperty({ required: true }) bandName: string;
  @ApiProperty({ required: true }) description: string;
  @ApiProperty({ required: true }) votes: number;
  @ApiProperty({ required: true }) status: EBandStatus;
}
