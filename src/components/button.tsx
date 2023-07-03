import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router";

interface ButtonProps {
    link: Url;
    text: string;
    pageTitle?: string;
}

export default function Buttons(props: ButtonProps) {
    const {link, text} = props;
    return (
    <Link href={link} className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-fit m-4 font-semibold">
        {text}
    </Link>
    )
}
