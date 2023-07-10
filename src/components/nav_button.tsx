import { useRouter } from "next/router";
import {HomeIcon, ComputerDesktopIcon, Cog6ToothIcon} from "@heroicons/react/24/solid"

export default function NavButton() {
    const router = useRouter();
    return (
        <>
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-pantau-light-green/30 group" onClick={() => router.push("/dashboard")}>
                <HomeIcon className="w-[24px] text-pantau-green"/>
            </button>
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-pantau-light-green/30 group" onClick={() => router.push("/dashboard/monitor")}>
                <ComputerDesktopIcon className="w-[24px] text-pantau-green"/>
            </button>
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-pantau-light-green/30 group" onClick={() => router.push("/dashboard/setting")}>
                <Cog6ToothIcon className="w-[24px] text-pantau-green"/>
            </button>
        </>
    )
}
