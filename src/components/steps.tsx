import { Card } from "./card"
import StepsData from "@/configs/stepsData"

export default function  Steps() {
    return(
        <div>
            <h1 className="my-8 text-xl font-bold text-center">Streamlined Plant Monitoring Process in 3 Simple Steps</h1>
            <div className="container flex flex-col items-start mx-auto mb-[40px] xl:justify-evenly xl:columns-3 xl:flex-row">
                {StepsData.map((data)=> {
                    return <Card data={data} key={data.title}/>
                })}
            </div>
        </div>
        
    )
}