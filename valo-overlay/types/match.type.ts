import { AgentName, Agent } from "./agent.types"

export enum TeamSide {
    Attackers = "blue",
    Defenders = "red"
}

type Side = {
    [agentName: AgentName | string]: Agent
}


export type Match = {
    [side: string]: Side,
}