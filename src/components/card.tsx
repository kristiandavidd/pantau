interface CardProps{
    data: {
        title:string;
        imgUrl:string;
        desc:string;
        step:string;
    }
}

function Card(props: CardProps) {
    const {data} = props;
    return(
        <div>
            <h1>{data.title}</h1>
            <h1>{data.imgUrl}</h1>
            <h1>{data.desc}</h1>
            <h1>{data.step}</h1>
        </div>
    )
}

export {Card}