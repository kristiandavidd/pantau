import { HeartRateMonitor, Home, Settings } from "tabler-icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
    const router = useRouter();
    return(
    <Link href="/dashboard" className="w-[150px] h-screen bg-center bg-cover rounded-r-[32px] flex flex-col items-center gap-4 p-5" 
        style={{
            backgroundImage: "url('../../bg.svg')",
        }}> 

        <img src="../../logos.svg" alt="" className="w-[40px]"/>
        <Link href="/dashboard" className={`hover:bg-pantau-light-green/60 w-[40px] h-[40px] flex justify-center items-center rounded-lg active:bg-pantau-light-green/60 ${router.asPath === "/dashboard" && 'bg-pantau-light-green'}`} >
            <Home 
                size={24}
                strokeWidth={2}
                color={'white'}
            />
        </Link>

        <Link href="/dashboard/monitor" className={`hover:bg-pantau-light-green/60 w-[40px] h-[40px] flex justify-center items-center rounded-lg active:bg-pantau-light-green/60 ${router.asPath === "/dashboard/monitor" && 'bg-pantau-light-green'}`} >
            <HeartRateMonitor
                size={24}
                strokeWidth={2}
                color={'white'}
            />
        </Link>

        <Link href="/dashboard/setting" className={`hover:bg-pantau-light-green/60 w-[40px] h-[40px] flex justify-center items-center rounded-lg active:bg-pantau-light-green/60 ${router.asPath === "/dashboard/setting" && 'bg-pantau-light-green'}`} >
            <Settings
                size={24}
                strokeWidth={2}
                color={'white'}
            />
        </Link>
    </Link>
    )
}