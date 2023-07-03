import { Card } from "./card"
import StepsData from "@/configs/stepsData"

export default function  Steps() {
    return(
        <div className="container flex flex-col items-center mx-auto mb-[40px] xl:justify-evenly xl:columns-3 xl:flex-row">
            {StepsData.map((data)=> {
                return <Card data={data} key={data.title}/>
            })}
        </div>
    )
}