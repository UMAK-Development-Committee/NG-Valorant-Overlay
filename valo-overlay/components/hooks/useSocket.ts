import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const useSocket = () => {
  const [isConnected, setConnectionState] = useState(false);
  const [socket, setSocket] = useState({} as Socket);

  useEffect(() => {
    let socketConnection: Socket = io("http://127.0.0.1:4445");

    socketConnection.connect();
    
    socketConnection.on('after connect', () => {
      setSocket(socketConnection);
      setConnectionState(true);
    });
  }, []);

  return { socket, isConnected };
}

export default useSocket;