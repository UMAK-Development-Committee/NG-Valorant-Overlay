import { FunctionComponent, HTMLAttributes } from "react";

type PlayerCardAttributes = {
  inverted?: boolean
  hasUlt?: boolean
  isAlive?: boolean
} & HTMLAttributes<HTMLElement>

const PlayerCard: FunctionComponent<PlayerCardAttributes> = (props) => {
  
  const LeftSideCard = () => {
    return (
      <div className="my-3 w-full">
        <div className="w-[50%] h-[70px] flex flex-row">
          {/* Agent Icon */}
          <div className="w-[30%] h-full bg-black">
            <img className="w-full h-full" src="AgentIcons/Yoru_icon.png" />
          </div>
  
          {/* Agent Ability & Gun Information */}
          <div className="w-full h-full flex flex-row bg-gradient-to-r from-black">
            <div className="w-[25%] h-full flex flex-col">
              <div className="w-full h-[60%] p-1 px-2">
                <img className="w-full h-full" src="UltIcons/yoru_ult.png" />
              </div>
              <div className="w-full h-[40%] p-1 px-4">
                <img className="w-full h-full" src="ShieldIcons/full.png" />
              </div>
            </div>
            
            <div className="w-full h-full flex flex-col">
              <div className="h-[70%] w-full scale-x-[-1] px-6 py-2">
                <img className="w-full h-full" src="WeaponImages/marshall.png"  />
            </div>
            </div>
          </div>
  
  
        </div>
        <div className="w-[50%] h-1 bg-green-500"></div>
      </div>
    );
  }

  const RightSideCard = () => {
    return (
      <div className="my-3 flex flex-col items-end w-full">
        <div className="w-[50%] h-[70px] flex flex-row-reverse">
          {/* Agent Icon */}
          <div className="w-[30%] h-full bg-black">
            <img className="w-full h-full" src="AgentIcons/Yoru_icon.png" />
          </div>
  
          {/* Agent Ability & Gun Information */}
          <div className="w-full h-full flex flex-row-reverse bg-gradient-to-l from-black">
            <div className="w-[25%] h-full flex flex-col">
              <div className="w-full h-[60%] p-1 px-2">
                <img className="w-full h-full" alt="agent icon" src="UltIcons/yoru_ult.png" />
              </div>
              <div className="w-full h-[40%] p-1 px-4">
                <img className="w-full h-full" alt="shield icon" src="ShieldIcons/full.png" />
              </div>
            </div>
            
            <div className="w-full h-full flex flex-col">
              <div className="h-[70%] w-full px-6 py-2">
                <img className="w-full h-full" alt="weapon icon" src="WeaponImages/ghost.png"  />
            </div>
            </div>
          </div>
  
  
        </div>
        <div className="w-[50%] h-1 bg-red-500"></div>
      </div>
    );
  }

  return props.inverted ? <RightSideCard /> : <LeftSideCard />
}


export default PlayerCard;