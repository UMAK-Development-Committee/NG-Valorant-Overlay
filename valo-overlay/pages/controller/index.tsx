import { NextPage } from "next";

const Controller: NextPage = () => {
    return (
        <div className="absolute w-screen h-screen bg-primary text-white grid grid-cols-2">
            <div className="col-span-1 grid grid-rows-2">
                <section className="row-span-1 flex flex-col justify-center items-start mx-12 font-bold">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-center items-center">
                            <span className="text-4xl">MATCH</span>
                            <div className="h-[50%] w-full bg-white mx-3">&nbsp;</div>
                        </div>

                        <span className="text-[60px]">DETAILS</span>
                    </div>
                </section>

                <section className="row-span-1">
                    
                </section>
            </div>

            <div className="col-span-1 grid grid-rows-2">
                <section className="row-span-1 flex flex-col justify-center items-center">
                    
                </section>

                <section className="row-span-1">
                    
                </section>
            </div>
        </div>
    )
}

export default Controller;