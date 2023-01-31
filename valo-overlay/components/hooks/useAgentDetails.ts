import { Agent, AgentName } from "@/types/agent.types";
import { Match, TeamSide } from "@/types/match.type";
import { useState } from "react";
import { Socket } from "socket.io-client";

const useAgentDetails = (socket: Socket) => {

    const [details, setDetails] = useState({
        "blue": [] as any,
        "red": [] as any
    });

    function registerSocket() {
        socket.on('receive_details', data => {
            console.log("Received new value!");
    
            const formattedData = data["match_details"];
    
            console.log(formattedData);
    
            const allTeamData = {
                "blue": [] as any,
                "red": [] as any
            }
    
            Object.keys(formattedData).map((val: any) => {
                let currentSide = formattedData[val];
                
                let agentKeys = Object.keys(currentSide);
    
                agentKeys.forEach((agent) => {
                    const shield: string | null = currentSide[agent]["shield"];
                    const agentName: AgentName = currentSide[agent]["name"];
                    const currentUltPoints: any = currentSide[agent]["current_ultimate_points"];
                    const weapon: string = currentSide[agent]["weapon"];
                    const alive: boolean = currentSide[agent]["alive"];
    
                    // @ts-ignore
                    allTeamData[val].push({
                        shield,
                        agentName,
                        currentUltPoints,
                        weapon,
                        alive
                    })
                })
            })
    
            setDetails(allTeamData);
        })
    }

    

    return { details, registerSocket }
}


export default useAgentDetails;