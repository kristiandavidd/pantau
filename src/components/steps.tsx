import { Card } from "./card"
import StepsData from "@/configs/stepsData"

export default function  Steps() {
    return(
        <div className="my-20">
            <h1 className="px-5 my-6 text-2xl font-bold text-center">Streamlined Plant Monitoring Process in 3 Simple Steps</h1>
            <div className="flex flex-col items-center justify-center w-full md:items-start md:flex-row">
                {StepsData.map((data)=> {
                    return <Card data={data} key={data.title}/>
                })}
            </div>
        </div>
        
    )
}