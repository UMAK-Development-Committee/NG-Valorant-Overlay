import { FunctionComponent, HTMLAttributes } from "react";

type HeaderAttrs = {
  attackerTeam?: string,
  defenderTeam?: string,
  swapSides?: boolean
} & HTMLAttributes<HTMLDivElement>

const Header: FunctionComponent<HeaderAttrs> = (props) => {
  return (
    <div className="flex flex-row justify-center w-100 h-20">
      <div className="bg-[#000228] h-16 w-64 flex flex-col justify-center text-white p-4 font-bold">
        <span>{props.swapSides ? props.defenderTeam?.toUpperCase() : props.attackerTeam?.toUpperCase()}</span>
        <span className="text-xs font-normal">ATTACKER</span>
      </div>
      <div className="bg-[#000135] w-20 flex justify-center items-center">
        <img src="LOGO.png" alt="network games logo"/>
      </div>
      <div className="bg-[#000228] h-16 w-64 flex flex-col justify-center items-end p-4 text-white font-bold">
        <span>{props.swapSides ? props.attackerTeam?.toUpperCase() : props.defenderTeam?.toUpperCase()}</span>
        <span className="text-xs font-normal">DEFENDER</span>
      </div>
    </div>
  );
}


export default Header;