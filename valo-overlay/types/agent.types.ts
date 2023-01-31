export enum Shield {
    Full = "full",
    Half = "half",
}

export enum AgentName {
    Brimstone = "Brimstone",
    Phoenix = "Phoenix",
    Sage = "Sage",
    Sova = "Sova",
    Viper = "Viper",
    Cypher = "Cypher",
    Reyna = "Reyna",
    Killjoy = "Killjoy",
    Breach = "Breach",
    Omen = "Omen",
    Jett = "Jett",
    Raze = "Raze",
    Skye = "Skye",
    Yoru = "Yoru",
    Astra = "Astra",
    Kayo = "Kayo",
    Chamber = "Chamber",
    Neon = "Neon",
    Fade = "Fade",
    Harbor = "Harbor"
}

export type AgentDetails = {

}
 
export type Agent = {
    agent: AgentName,
    name: string,
    current_ultimate_points: any,
    shield: Shield | string,
    weapon: string,
}