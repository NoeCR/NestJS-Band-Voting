import { RedisService } from './../../providers/redis/redis.service';
import { WebsocketService } from './websocket.service';
import { INestApplicationContext } from '@nestjs/common';
import { IoAdapter } from "@nestjs/platform-socket.io";
import socketio from 'socket.io';


interface TokenPayload {
  readonly userId: string;
}

export interface AuthenticatedSocket extends socketio.Socket {
  auth: TokenPayload;
}

export class WebsocketAdapter extends IoAdapter implements WebsocketAdapter {

  private wsServer: socketio.Server;

  public constructor(
    private readonly app: INestApplicationContext,
    private readonly websocketService: WebsocketService,
    private readonly redisService: RedisService
  ) {
    super(app);
  }

  public create(port: number, options: socketio.ServerOptions): socketio.Server {
    const server = super.createIOServer(port, options);
    // this.redisService.injectSocketServer(server);

    server.use(async (socket: AuthenticatedSocket, next) => {
      const token = socket.handshake.query?.token || socket.handshake.headers?.authorization;

      if (!token) {
        socket.auth = null;

        // not authenticated connection is still valid
        // thus no error
        return next();
      }

      try {
        // fake auth
        socket.auth = {
          userId: '1234',
        };

        return next();
      } catch (e) {
        return next(e);
      }
    });

    return server;
  }

  public bindClientConnect(server: socketio.Server, callback: Function): void {
    server.on('connection', (socket: AuthenticatedSocket) => {
      if (socket.auth) {
        this.websocketService.add(socket.auth.userId, socket);

        socket.on('disconnect', () => {
          this.websocketService.remove(socket.auth.userId, socket);

          socket.removeAllListeners('disconnect');
        });
      }

      callback(socket);
    });
  }
}