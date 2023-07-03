export default function Footer() {
    return(
        <div className="h-[350px] bg-pantau-green mt-8 overflow-hidden">
            <div className="flex justify-between">
                <div className="flex flex-col justify-between p-10 w-1/3">
                    <div className="flex items-center ">
                        <img src="../../logom.svg" alt="" className="w-[50px]"/>
                        <h1 className="font-bold text-4xl text-pantau-dark-green mx-2">Pantau</h1>
                    </div>
                    <div>
                        <p>© 2023 TEAM GIMISTIK.</p>
                        <p>All rights reserved.</p>
                        <p>Built with ♥</p>
                    </div>
                </div>
                <div className="h-[350px]">
                    <img src="../../logow.svg" alt="" className="rotate-12"/>
                </div>
            </div>
        </div>
    )
}