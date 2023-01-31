import { io, Socket } from "socket.io-client";
import { createServer, Server } from "http";

export async function startConnection(): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    let socketConnection = io("http://localhost:4456");
    socketConnection.on("connect", () => resolve(true));
    reject();
  })
}