import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from "@nestjs/common";
import { CoreMongodbService } from '@db/core-mongodb/core-mongodb.service';
import { BandDocument } from "./band.schema";
import { Model } from 'mongoose';
import { BandStatus } from '@common/enum/band-status';
import { MongodbSort } from '@common/enum/mongodb-sort';

@Injectable()
export class BandMongodbService extends CoreMongodbService<BandDocument> {
  constructor(@Inject('BAND_MODEL') model: Model<BandDocument>, private readonly configService: ConfigService) {
    super(model);
  }

  async findAllBands(page: number, limit: number, sortString: MongodbSort, bandStatus?: BandStatus[]): Promise<any> {
    const filter: Record<string, unknown> = {};
    const sort = sortString === MongodbSort.Ascendent ? 1 : -1;

    if (bandStatus)
      filter.status = { $in: bandStatus };

    return this.paginate(sort, page, limit, filter);
  }
}