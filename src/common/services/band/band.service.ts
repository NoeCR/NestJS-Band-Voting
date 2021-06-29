import { UpdateBandDto } from './../../../band/dto/update_band.dto';
import { BandStatus } from './../../enum/band-status';
import { MongodbSort } from '@common/enum/mongodb-sort';
import { Injectable } from '@nestjs/common';
import { Band } from 'src/band/classes/band.class';
import { v4 as uuidv4 } from 'uuid';
import { BandMongodbService } from '@db/band-mongodb/band-mongodb.service';

@Injectable()
export class BandService {
  constructor(
    private readonly bandMongodbService: BandMongodbService,
  ) { }


  async createBand(band: Band): Promise<Band> {
    band.bandId = uuidv4();

    return this.bandMongodbService.insert(band);
  }

  async getAllBands(page: number, limit: number, sort: MongodbSort, bandStatus?: BandStatus[]): Promise<Band[]> {
    return this.bandMongodbService.findAllBands(page, limit, sort, bandStatus);
  }

  async updateBand(bandId: string, { bandName, description, status, votes }: UpdateBandDto): Promise<Band> {
    return this.bandMongodbService.findOneAndUpdate(
      { bandId },
      {
        ...(bandName && { bandName }),
        ...(description && { description }),
        ...(status && { status }),
        ...(votes && { votes }),
      },
      { new: true }
    );
  }

  async deleteBand(bandId: string): Promise<Band> {
    return this.bandMongodbService.findOneAndUpdate(
      { bandId },
      { status: BandStatus.DISABLED },
      { new: true }
    );
  }
}
