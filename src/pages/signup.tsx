import { EmptyLayout } from "@/components/layout";
import { Space, TextInput, PasswordInput } from "@mantine/core";
import Link from "next/link";

export default function Login() {
    return(
        <EmptyLayout
        pageTitle="Sign Up | Pantau"
        description="Sign Up Page Pantau">
            <div className="flex flex-col items-center h-screen">
                <Link href="/" className="flex items-center mx-auto my-4 w-fit">
                    <img src="../../logo.svg" alt="" className="w-[40px]"/>    
                    <p className="text-lg font-bold">Pantau</p>
                </Link>
                <div className="flex flex-col items-center justify-center w-2/3 md:w-1/2 lg:w-1/4">  
                    <h1 className="text-2xl font-bold">Daftar</h1>
                    <form action="" className="w-full">
                        <Space h="lg" />
                        <TextInput
                            id="email"
                            label="Email"
                            withAsterisk={true}
                            placeholder="Email"
                            // {...form.getInputProps("email")}
                        />
                        <Space h="sm" />
                        <TextInput
                            id="username"
                            withAsterisk={true}
                            label="Username"
                            placeholder="Username"
                            // {...form.getInputProps("username")}
                        />
                        <Space h="sm" />
                        <PasswordInput
                            placeholder="********"
                            label="Password"
                            id="password"
                            required
                            // {...form.getInputProps("password")}
                        />
                        <Space h="sm" />
                        <PasswordInput
                            placeholder="********"
                            label="Ulangi Password"
                            required
                            // {...form.getInputProps("confirmPassword")}
                        />
                        <Space h="sm" />
                    </form>        
                    
                    <Link href="/dashboard" className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-full m-2 font-semibold">
                        Daftar
                    </Link>
                    <Link href="/login" className="border-2 border-pantau-green/0 text-center rounded-[8px] text-pantau-green hover:bg-pantau-green/20 ease-in-out duration-300 text-sm py-2 px-8 w-full font-semibold m-2 hover:border-pantau-green/60 hover:text-pantau-dark-green">
                        Masuk
                    </Link>
                </div>
            </div>
            
        </EmptyLayout>
    )
}