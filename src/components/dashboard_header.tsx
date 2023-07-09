import {BellIcon} from "@heroicons/react/24/solid"
import Link from "next/link";

export default function DashboardHeader(props: { title: string }) {
    const {title} = props;
    return(
        <div className="flex justify-between w-full h-[60px] items-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="flex items-center gap-3">
                <BellIcon className="w-[24px] text-pantau-dark-green hover:translate-y-[2px] duration-300 ease-in-out cursor-pointer hover:text-pantau-green"/>
                <img src="../../pp.svg" alt="" className="w-[30px] h-[30px] rounded-full"/>
                <h1>Admin</h1>
                <Link href="/" className=" border-2 border-pantau-green text-center rounded-[8px] text-pantau-green hover:text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-fit m-4 font-semibold">
                    Logout
                </Link>
            </div>
        </div>
        
        
    )
}