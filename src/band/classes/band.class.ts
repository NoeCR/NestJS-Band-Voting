import { BandStatus } from '@common/enum/band-status';
import { CreateBandDto } from '../dto/create_band.dto';

export class Band {
  bandId: string;
  createdAt: Date;
  bandName: string;
  description: string;
  votes: number;
  status: BandStatus;

  static fromCreateBandDto(data: CreateBandDto): Band {
    const band = new Band();
    Object.assign(band, data);

    return band;
  }
}
