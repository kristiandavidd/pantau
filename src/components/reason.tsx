import ReasonData from "@/configs/reasonData"
import { ReasonCard } from "./card"

export default function Reason() {
    return(
        <div className="px-10 my-20">
            <h1 className="my-8 text-2xl font-bold text-center">Why Choose Pantau for Plant Monitoring?</h1>
            <div className="container flex flex-col items-start mx-auto mb-[40px] xl:justify-evenly xl:columns-3 xl:flex-row">
                {ReasonData.map((data)=> {
                    return <ReasonCard data={data} key={data.title}/>
                })}
            </div>
        </div>
    ) 
}