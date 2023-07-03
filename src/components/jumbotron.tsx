import Button from "./button"

export default function Jumbotron() {
    return(
        <div id="home" className="flex flex-col-reverse px-10 py-20 md:flex-row">
            <div className="flex flex-col items-center p-5 md:items-start md:w-2/3">
                <h1 className="m-4 text-3xl font-bold text-center md:text-left">Pantau: Your Ultimate Plant Monitoring Solution</h1>
                <p className="m-4 font-semibold text-center text-md md:text-left">Detect and Diagnose Plant Diseases with Confidence</p>
                <Button text="Get Started" link="/login"/>
            </div>
            <div className="m-auto w-2/2 md:w-1/3">
                <img src="../../jumbotron.svg" alt="Pantau" />
            </div>
        </div>
        
    )
}