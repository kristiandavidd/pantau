import { EmptyLayout } from "@/components/layout";
import Sidebar from "@/components/sidebar";
import DashboardHeader from "@/components/dashboard_header";
import Link from "next/link";
import NavButton from "@/components/nav_button";
import { Space, TextInput } from "@mantine/core";
import { data } from "autoprefixer";

export default function Setting(){
    return(
        <EmptyLayout 
        pageTitle="Setting | Pantau"
        description="ini dashboard Pantau">
            <div className="flex pb-20 lg:pb-0">
                <Sidebar/>
                <div className="flex flex-col items-center w-full px-5 py-3">
                    <DashboardHeader title="Setting"/>
                    <div className="w-2/3 md:w-1/2 lg:w-1/3">
                        <img src="../../pp.svg" alt="" className="w-1/4 m-auto rounded-full"/>
                        <p className="text-[12px] text-pantau-green underline text-center m-2">Change Image</p>
                        <form action="" className="w-full">
                            <Space h="lg" />
                            <TextInput type="text" width="100%" disabled label="Username" radius="md" 
                                placeholder="email"
                                // placeholder={data.email}
                            />
                            <Space h="sm" />
                            <TextInput type="email" width="100%" disabled label="Email" radius="md" 
                                placeholder="username"
                                // placeholder={data.username}
                            />
                            <Space h="sm" />
                            
                        </form>
                        <Link href="/dashboard/setting">
                            <button  className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-full m-auto font-semibold">
                                Update
                            </button> 
                        </Link>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 lg:hidden">
                <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
                <NavButton/>
                </div>
            </div>
        </EmptyLayout>
    )
}