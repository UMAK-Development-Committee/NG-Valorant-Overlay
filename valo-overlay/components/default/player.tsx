import { capitalize } from "@/utils/capitalize";
import anime from "animejs";
import { createRef, FunctionComponent, HTMLAttributes, useEffect, useRef, useState } from "react";

type PlayerCardAttributes = {
  inverted?: boolean
  hasUlt?: boolean
  isAlive?: boolean,
  details?: any
} & HTMLAttributes<HTMLElement>

const PlayerCard: FunctionComponent<PlayerCardAttributes> = (props) => {
  
  const healthBarRef = createRef<HTMLDivElement>();

  const [previousHealth, setPreviousHealth] = useState();

  useEffect(() => {
    anime({
      targets: [healthBarRef.current],
      width: [previousHealth, props.details["health"] + "%"],
      easing: "easeInOutExpo"
    })
    setPreviousHealth(props.details["health"])
  }, [previousHealth, props.details]);

  const LeftSideCard = () => {
    return (
      <div className="my-2 w-[30%]">
        <div className="w-full h-[6vh] flex flex-row">
          {/* Agent Icon */}
          <div className="w-[30%] h-full bg-black">
          <img className={`w-full h-full ${props.details["health"] <= 0 ? "grayscale" : ""}`} src={`AgentIcons/${capitalize(props.details["agentName"]!)}_icon.png`} />

          </div>
  
          {/* Agent Ability & Gun Information */}
          

  <div className={`${props.details["health"] > 0 ? "w-full" : "w-[20%]"} h-full flex flex-row bg-gradient-to-r from-black`}>
  {
              props.details["health"] > 0 ? <>
              <div className="w-[25%] h-full flex flex-col">
            <div className="w-full h-[60%] p-1 px-2">
              <img className={`w-full h-full ${props.details["currentUltPoints"] == "READY" ? "opacity-100" : "opacity-50"}`} src={`UltIcons/${capitalize(props.details["agentName"]!)}_ult.png`} />
            </div>
            <div className="w-full h-[40%] p-1 px-3">
              <img className="w-full h-full" src={`ShieldIcons/${props.details["shield"] ?? "none"}.png`} />
            </div>
          </div>
          
          <div className="w-full h-full flex flex-col">
            <div className="h-[70%] w-full scale-x-[-1] px-6 py-2">
              <img className="w-full h-full" src={`WeaponImages/${props.details["weapon"]!}.png`}  />
            </div>
            <div className="h-[30%] w-full text-white text-xs flex flex-row justify-start">
              <span className="text-[8px]">{capitalize(props.details["agentName"] ?? "Agent")}</span>
              &nbsp;
              <span> - </span>
              &nbsp;
              <span className="text-[8px]">{props.details["name"] ?? "PLAYER"}</span>
            </div>
          </div>
              </> : <></>
          }
          </div>
  
  
        </div>
        <div className="w-0 h-1 bg-green-500" ref={healthBarRef}></div>
      </div>
    );
  }

  const RightSideCard = () => {
    return (
      <div className="w-full flex flex-col items-end">
<div className="my-2 w-[30%] flex flex-col items-end justify-end ">
      <div className="w-full h-[6vh] flex flex-row-reverse">
        {/* Agent Icon */}
        <div className="w-[30%] h-full bg-black">
        <img className={`w-full h-full ${props.details["health"] <= 0 ? "grayscale" : ""}`} src={`AgentIcons/${capitalize(props.details["agentName"]!)}_icon.png`} />

        </div>

        {/* Agent Ability & Gun Information */}
        <div className={`${props.details["health"] > 0 ? "w-full" : "w-[20%]"} h-full flex flex-row-reverse bg-gradient-to-l from-black`}>
        {
            props.details["health"] > 0 ? <>
            <div className="w-[25%] h-full flex flex-col">
          <div className="w-full h-[60%] p-1 px-2">
            <img className={`w-full h-full ${props.details["currentUltPoints"] == "READY" ? "opacity-100" : "opacity-50"}`} src={`UltIcons/${capitalize(props.details["agentName"]!)}_ult.png`} />
          </div>
          <div className="w-full h-[40%] p-1 px-3">
            <img className="w-full h-full" src={`ShieldIcons/${props.details["shield"] ?? "none"}.png`} />
          </div>
        </div>
        
        <div className="w-full h-full flex flex-col">
          <div className="h-[70%] w-full scale-x-[-1] px-6 py-2">
            <img className="w-full h-full scale-x-[-1]" src={`WeaponImages/${props.details["weapon"]!}.png`}  />
          </div>
          <div className="h-[30%] w-full text-white text-xs flex flex-row justify-end">
            <span className="text-[8px]">{capitalize(props.details["agentName"] ?? "Agent")}</span>
            &nbsp;
            <span> - </span>
            &nbsp;
            <span className="text-[8px]">{props.details["name"] ?? "PLAYER"}</span>
          </div>
        </div>
            </> : <></>
        }
        </div>


      </div>
      <div className="w-0 h-1 bg-red-500" ref={healthBarRef}></div>
    </div>
      </div>
    );
  }

  return props.inverted ? <RightSideCard /> : <LeftSideCard />
}


export default PlayerCard;