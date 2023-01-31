import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div className="flex flex-row justify-center w-100 h-20">
      <div className="bg-[#000228] h-16 w-64 flex items-center text-white p-4 font-bold">
        <span>TEAM ATTACKERS</span>
      </div>
      <div className="bg-[#000135] w-20 flex justify-center items-center">
        <img src="LOGO.png" alt="network games logo"/>
      </div>
      <div className="bg-[#000228] h-16 w-64 flex justify-end items-center p-4 text-white font-bold">
      <span>TEAM DEFENDERS</span>
      </div>
    </div>
  );
}


export default Header;