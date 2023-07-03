import Link from "next/link"

export default function Header() {
    return(
        <nav className="p-4 flex justify-between">
            <Link href="/" className="flex items-center">
                <img src="../../logo.svg" alt="pantau" className="w-[35px]"/>
                <h1 className="font-bold text-lg">Pantau</h1>
            </Link>
            <ul className="flex items-center">
                <Link href="#home" className="border-b-[3px] border-transparent hover:border-pantau-green ease-in-out duration-300"><li className="mx-5">Home</li></Link>
                <Link href="#steps" className="border-b-[3px] border-transparent hover:border-pantau-green ease-in-out duration-300"><li className="mx-5">Steps</li></Link>
                <Link href="#why" className="border-b-[3px] border-transparent hover:border-pantau-green ease-in-out duration-300"><li className="mx-5">Why Pantau?</li></Link>
                <Link href="#partners" className="border-b-[3px] border-transparent hover:border-pantau-green ease-in-out duration-300"><li className="mx-5">Partners</li></Link>
            </ul>
        </nav>
    )
}