import CardHome from "../cards/CardHome";

import mecanico from "../../assets/mec2.jpg";

export default function Home() {

    return(

        <div className="h-screen bg-custom">

            <div className="bg-home bg-cover h-3/6 p-20 bg-opacity-65">

                <h1 className="text-center font-bold text-5xl text-slate-100 breal-all">Welcome to  <span className="bg-slate-100 text-custom rounded-full p-2 text-4xl font-bold">Red Car  </span></h1>

               
                <p className="p-5 font-bold text-center text-red-600 breal-all"> We specialize in taking care of your red car. Explore our services and schedule an appointment today.</p>

            </div>

            <div className="flex justify-evenly items-center absolute top-[53%] left-[23%] sm:left-[20%] md:left-[15%] lg:left-[23%]">

                <div className="">

                    <CardHome 
                        img={mecanico}
                        title="Teste"
                        description="Teste Teste Teste"
                    />

                    <div className="flex justify-evenly items-center p-6 sm:p-0">

                        <button className="w-[3vw] bg-gray-500/50 h-[1.5vh] rounded-full sm:hidden"></button>
                        <button className="w-[3vw] bg-gray-500/50 h-[1.5vh] rounded-full sm:hidden"></button>
                        <button className="w-[3vw] bg-gray-500/50 h-[1.5vh] rounded-full sm:hidden"></button>

                    </div>

                </div>

                <div className="hidden sm:block md:block">
                    <CardHome 
                        img={mecanico}
                        title="Teste"
                        description="Teste Teste Teste"
                    />
                </div>

                <div className="hidden md:block">
                    <CardHome 
                        img={mecanico}
                        title="Teste"
                        description="Teste Teste Teste"
                    />
                </div>

            </div>

        </div>

    )

}