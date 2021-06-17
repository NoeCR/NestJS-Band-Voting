import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CONFIG } from '@config/configuration';

function initSwagger(app: INestApplication, configService: ConfigService) {
  const config = new DocumentBuilder()
    .setTitle(configService.get(CONFIG.SERVICE_NAME))
    .setDescription(CONFIG.SERVICE_DESCRIPTION)
    .setVersion(CONFIG.SERVICE_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  initSwagger(app, configService);

  await app.listen(8080);
})();
