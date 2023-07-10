import { EmptyLayout } from "@/components/layout";
import { Checkbox, PasswordInput, Space, TextInput } from "@mantine/core";
import Link from "next/link";

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
                <div className="flex flex-col items-center justify-center w-2/3 md:w-1/2 lg:w-1/4">
                
                    <h1 className="text-2xl font-bold">Masuk</h1>
                    <form action="" className="w-full">
                        <Space h="lg" />
                        <TextInput
                            id="input-email"
                            placeholder="example@email.com"
                            label="Email"
                            radius="md"
                            required
                            //   {...form.getInputProps("email")}
                        />
                        <Space h="sm" />
                        <PasswordInput
                            placeholder="Password"
                            label="Password"
                            radius="md"
                            required
                            // {...form.getInputProps("password")}
                        />
                        <Space h="sm" />
                        <div className="flex justify-between">
                        <Checkbox label="Ingat saya" color="green" radius="md" disabled />
                            <Link href="/" className="text-sm underline">Lupa Password?</Link>
                        </div>
                        <Space h="lg" />
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