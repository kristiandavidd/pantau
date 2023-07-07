

export default function Footer() {
    return(
        <div className="h-[350px] bg-pantau-green mt-8 overflow-hidden ">
            <div className="flex flex-col justify-between md:flex-row">
                <div className="flex flex-col justify-between w-full p-10 md:w-1/3">
                    <div className="flex flex-col items-center md:flex-row">
                        <img src="../../logom.svg" alt="" className="w-[50px]"/>
                        <h1 className="mx-2 text-4xl font-bold text-pantau-dark-green">Pantau</h1>
                    </div>
                    <div className="my-4 text-center md:text-left">
                        <p>© 2023 TEAM GIMISTIK.</p>
                        <p>All rights reserved.</p>
                        <p>Built with ♥</p>
                    </div>
                </div>
                <div className="h-[350px]">
                    <img src="../../logog.svg" alt="" className="rotate-12"/>
                </div>
            </div>
        </div>
    )
}