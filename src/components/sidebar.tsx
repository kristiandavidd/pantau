import Link from "next/link";
import {HomeIcon, ComputerDesktopIcon, Cog6ToothIcon} from "@heroicons/react/24/solid"

export default function Sidebar(){
    return(
    <div className="w-[150px] h-screen bg-center bg-cover rounded-r-[32px] flex flex-col items-center gap-4 p-10" 
        style={{
            backgroundImage: "url('../../bg.svg')",
        }}> 

        <Link href="/dashboard">
            <img src="../../logow.svg" alt="" className="w-[40px]"/>    
        </Link>
        <Link href="/dashboard" 
            className={`hover:bg-pantau-light-green/60 w-[40px] h-[40px] flex justify-center items-center rounded-lg active:bg-pantau-light-green/60`} >
            <HomeIcon className="w-[24px] text-white"/>
        </Link>

        <Link href="/dashboard/monitor" 
            className={`hover:bg-pantau-light-green/60 w-[40px] h-[40px] flex justify-center items-center rounded-lg active:bg-pantau-light-green/60`} >
            <ComputerDesktopIcon className="w-[24px] text-white"/>
        </Link>

        <Link href="/dashboard/setting" 
            className={`hover:bg-pantau-light-green/60 w-[40px] h-[40px] flex justify-center items-center rounded-lg active:bg-pantau-light-green/60`} >
            <Cog6ToothIcon className="w-[24px] text-white"/>
        </Link>
    </div>
    )
}