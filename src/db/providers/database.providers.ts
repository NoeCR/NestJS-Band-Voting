import * as mongoose from 'mongoose';
import { CONFIG, ServiceConfiguration } from '@config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'MONGODB_CONNECTION',
    imports: [ConfigModule],
    inject: [ConfigModule],
    useFactory: (configService: ConfigService<ServiceConfiguration>): Promise<typeof mongoose> => {
      const mongoUri = configService.get(CONFIG.MONGODB_CONNECTION);

      return mongoose.connect(mongoUri, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
        useCreateIndex: true,
      });
    },
  },
];
