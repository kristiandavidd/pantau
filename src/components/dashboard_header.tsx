import {BellIcon} from "@heroicons/react/24/solid"

export default function DashboardHeader(props: { title: string }) {
    const {title} = props;
    return(
        <div className="flex justify-between w-full h-[60px] items-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="flex items-center gap-3">
                <BellIcon className="w-[24px] text-pantau-dark-green hover:translate-y-[2px] duration-300 ease-in-out cursor-pointer hover:text-pantau-green"/>
                <img src="../../pp.svg" alt="" className="w-[30px] h-[30px] rounded-full"/>
                <h1>Admin</h1>
            </div>
        </div>
        
        
    )
}