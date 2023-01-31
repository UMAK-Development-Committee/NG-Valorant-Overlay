import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  const [isConnected, setConnectionState] = useState(false);

  useEffect(() => {
    let socketConnection = io("https://")
  });
}

export default useSocket;