import { EBandStatus } from '@common/enum/band-status.enum';
import { CreateBandDto } from '../dto/create_band.dto';

export class Band {
  bandId: string;
  createdAt: Date;
  name: string;
  description: string;
  votes: number;
  status: EBandStatus;

  static fromCreateBandDto(data: CreateBandDto): Band {
    const band = new Band();
    Object.assign(band, data);

    return band;
  }
}
