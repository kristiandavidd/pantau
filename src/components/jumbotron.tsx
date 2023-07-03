import Button from "./button"

export default function Jumbotron() {
    return(
        <div id="home" className="flex px-10 py-20">
            <div className="w-2/3 p-5">
                <h1 className="text-3xl font-bold m-4">Pantau: Your Ultimate Plant Monitoring Solution</h1>
                <p className="text-md font-semibold m-4">Detect and Diagnose Plant Diseases with Confidence</p>
                <Button text="Get Started" link="/login"/>
            </div>
            <div className="w-1/3">
                <img src="../../jumbotron.svg" alt="Pantau" />
            </div>
        </div>
        
    )
}