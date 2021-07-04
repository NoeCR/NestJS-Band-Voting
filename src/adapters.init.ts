import { WebsocketService } from './services/websocket/websocket.service';
import { INestApplication } from '@nestjs/common';
import { RedisService } from './providers/redis/redis.service';
import { WebsocketAdapter } from './services/websocket/websocket.adapter';


export const initAdapters = (app: INestApplication): INestApplication => {
  const websocketService = app.get(WebsocketService);
  const redisService = app.get(RedisService);

  app.useWebSocketAdapter(new WebsocketAdapter(app, websocketService, redisService));

  return app;
}