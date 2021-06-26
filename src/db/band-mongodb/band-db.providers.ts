import { Connection, Model } from "mongoose";
import { BandDocument, BandSchema } from "./band.schema";


export const bandDbProviders = [
  {
    provide: 'BAND_MODEL',
    useFactory: (connection: Connection): Model<BandDocument> => connection.model('Band', BandSchema),
    inject: ['MONGODB_CONNECTION']
  },
];