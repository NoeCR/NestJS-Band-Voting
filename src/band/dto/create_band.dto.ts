import { ApiProperty } from '@nestjs/swagger';

export class CreateBandDto {
  @ApiProperty({ required: true }) bandName: string;
  @ApiProperty({ required: true }) description: string;
  @ApiProperty({ required: false }) votes: number;
}


