import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class WebsocketService {
  private webSocketState = new Map<string, Socket[]>();

  public add(userId: string, socket: Socket): boolean {
    const userSockets = this.webSocketState.get(userId) || [];

    const sockets = [...userSockets, socket];

    this.webSocketState.set(userId, [...new Set(sockets)]);

    return true;
  }

  public remove(userId: string, socket: Socket): boolean {
    const userSockets = this.webSocketState.get(userId);

    if (!userSockets) return true;

    const sockets = userSockets.filter(s => s.id !== socket.id);

    if (!sockets.length) this.webSocketState.delete(userId);
    else this.webSocketState.set(userId, sockets);

    return true;
  }

  public get(userId: string): Socket[] {
    return this.webSocketState.get(userId) || [];
  }

  public getAll(): Socket[] {
    const allSockets = [];

    this.webSocketState.forEach(sockets => allSockets.push(sockets));

    return allSockets;
  }
}
