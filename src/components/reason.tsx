import ReasonData from "@/configs/reasonData"
import { ReasonCard } from "./card"

export default function Reason() {
    return(
        <div className="px-10 my-20">
            <h1 className="px-5 my-8 text-2xl font-bold text-center">Why Choose Pantau for Plant Monitoring?</h1>
            <div className="flex flex-col items-center justify-center w-full md:items-start md:flex-row">
                {ReasonData.map((data)=> {
                    return <ReasonCard data={data} key={data.title}/>
                })}
            </div>
        </div>
    ) 
}