interface CardProps{
    data: {
        title:string;
        imgUrl:string;
        desc:string;
        step:string;
    }
}

interface ReasonProps {
    data: {
        title: string;
        desc: string;
    }
}

function ReasonCard(props: ReasonProps) {
    const {data} = props;
    return(
        <div className="w-[300px] p-5">
            <h1 className="my-4 text-lg font-bold text-center">{data.title}</h1>
            <p className="text-sm text-justify">{data.desc}</p>
        </div>
    )
}

function Card(props: CardProps) {
    const {data} = props;
    return(
        <div className="p-7 w-[350px] rounded-[12px] shadow-pantau-black/20 shadow-lg">
            <h1 className="text-lg font-bold text-center">{data.title}</h1>
            <img src={data.imgUrl} alt="" className="w-3/5 mx-auto my-4"/>
            <p className="text-sm text-justify">{data.desc}</p>
            <h1 className="m-4 text-2xl font-bold text-center">{data.step}</h1>
        </div>
    )
}

export {Card, ReasonCard}