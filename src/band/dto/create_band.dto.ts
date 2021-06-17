import { ApiProperty } from "@nestjs/swagger";


export class CreateBandDto {
  @ApiProperty({ required: true }) name: string;
  @ApiProperty({ required: true }) description: string;
  @ApiProperty({ required: false }) votes: number;
}

export class CreateBandResponseDto {
  @ApiProperty({ required: true }) bandId: string;
  @ApiProperty({ required: true }) name: string;
  @ApiProperty({ required: true }) description: string;
  @ApiProperty({ required: true }) votes: number;
}

