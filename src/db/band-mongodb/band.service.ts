import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from "@nestjs/common";
import { CoreMongodbService } from '@db/core-mongodb/core-mongodb.service';
import { BandDocument } from "./band.schema";
import { Model } from 'mongoose';

@Injectable()
export class BandMongodbService extends CoreMongodbService<BandDocument> {
  constructor(@Inject('BAND_MODEL') model: Model<BandDocument>, private readonly configService: ConfigService) {
    super(model);
  }

  async findBands(): Promise<any> {

  }
}