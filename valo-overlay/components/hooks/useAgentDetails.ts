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

            console.log("Recieved this: ", formattedData)
        
            const allTeamData = {
                "blue": [] as any,
                "red": [] as any,
                "score": [] as any
            }
    

            Object.keys(formattedData).map((val: any) => {
		        if (val == "red" || val == "blue") {
                    let currentSide = formattedData[val];
                
                    let agents = Object.keys(currentSide);
        
                    agents.forEach((agent) => {
                        const shield: string | null = currentSide[agent]["shield"];
                        const agentName: string = agent;
                        const name: AgentName = currentSide[agent]["name"];
                        const currentUltPoints: any = currentSide[agent]["current_ultimate_points"];
                        const weapon: string = currentSide[agent]["weapon"];
                        const alive: boolean = currentSide[agent]["alive"];
                        const health: number = currentSide[agent]["health"];
                        
                        // @ts-ignore
                        allTeamData[val].push({
                            shield,
                            agentName,
                            currentUltPoints,
                            weapon,
                            alive,
                            name,
                            health
                        })
                    })
                }

                
            })
            
            allTeamData["score"] = formattedData["score"];
            setDetails(allTeamData);
        })

        console.log("Currently listening to new match information...")
    }

    

    return { details, registerSocket }
}


export default useAgentDetails;