import Header from "@/components/core/header";
import PlayerCard from "@/components/default/player";
import { NextPage } from "next";

const GameScreen: NextPage = () => {
  return (
    <>
      {/* Main body */}
      <div className="h-screen w-full ">
        <Header />

        <div className="h-[88.3vh] grid grid-cols-2">
          <div className="col-span-1 flex flex-col justify-end items-start">
            {
              Array.from({length: 5}).map((x, i) => <PlayerCard key={i} />)
            }
          </div>
          <div className="col-span-1 w-full flex flex-col justify-end content-end">
          {
              Array.from({length: 5}).map((_, i) => <PlayerCard key={i} inverted={true} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default GameScreen;