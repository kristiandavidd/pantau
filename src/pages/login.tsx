import { EmptyLayout } from "@/components/layout";
import Link from "next/link";
import { Input,Checkbox, Spacer} from "@nextui-org/react";

export default function Login() {
    return(
        <EmptyLayout
        pageTitle="Login | Pantau"
        description="Login Page Pantau">
            <div className="flex flex-col items-center h-screen">
            <Link href="/" className="flex items-center mx-auto my-4 w-fit">
                    <img src="../../logo.svg" alt="" className="w-[40px]"/>    
                    <p className="text-lg font-bold">Pantau</p>
                </Link>
                <div className="flex flex-col items-center justify-center w-1/4">
                
                    <h1 className="text-2xl font-bold">Masuk</h1>
                    <form action="" className="w-full">
                        <Spacer y={1} />
                        <Input type="email" width="100%"clearable bordered label="Email" size="sm" placeholder="Email"/>
                        <Spacer y={0.5} />
                        <Input type="password" label="Password" bordered width="100%" size="sm" placeholder="Password"/>
                        <Spacer y={0.5} />
                        <div className="flex justify-between">
                            <Checkbox color="success" size="xs" labelColor="default">Ingat Saya</Checkbox>
                            <Link href="/" className="text-sm underline">Lupa Password?</Link>
                        </div>
                        <Spacer y={1} />
                    </form>        
                    
                    <Link href="/dashboard" className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-full m-2 font-semibold">
                        Masuk
                    </Link>
                    <Link href="/signup" className="border-2 border-pantau-green/0 text-center rounded-[8px] text-pantau-green hover:bg-pantau-green/20 ease-in-out duration-300 text-sm py-2 px-8 w-full font-semibold m-2 hover:border-pantau-green/60 hover:text-pantau-dark-green">
                        Daftar
                    </Link>
                </div>
            </div>
            
        </EmptyLayout>
    )
}