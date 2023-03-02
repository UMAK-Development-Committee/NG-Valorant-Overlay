import Header from "@/components/core/header";
import PlayerCard from "@/components/default/player";
import useAgentDetails from "@/components/hooks/useAgentDetails";
import useSocket from "@/components/hooks/useSocket";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const GameScreen: NextPage = () => {

  const router = useRouter();

  const { teamA, teamB, swap } = router.query;

  const { socket, isConnected } = useSocket();
  const { details, registerSocket } = useAgentDetails(socket);

  useEffect(() => {
    if (socket && isConnected) {
      registerSocket();
    }

    if (details) {
      console.log(details);
    }

    if (router.isReady) {
      console.log(teamA, teamB, swap);
    }

  }, [socket, isConnected, registerSocket, details, router.isReady])

  return (
    <>
      {/* Main body */}
      <div className="h-screen w-full ">
        {
          details.blue.length == 0 && details.red.length == 0 ? <div /> : <>
          <Header attackerTeam={(teamA as string)!} defenderTeam={(teamB as string)!} swapSides={swap == "true"} />

          <div className="h-[88.3vh] grid grid-cols-2">
            <div className="col-span-1 flex flex-col justify-end items-start mb-[20px]">
              {
                details[swap == "true" ? "red" : "blue"].map((val: any) => <PlayerCard key={val["agentName"]} details={val} />)
              }
            </div>
            <div className="col-span-1 w-full flex flex-col justify-end content-end mb-[20px]">
            {
                details[swap == "true" ? "blue" : "red"].map((val: any) => <PlayerCard key={val["agentName"]} details={val} inverted={true} />)
              }
            </div>
          </div>
          </>
        }
      </div>
    </>
  )
}

export default GameScreen;