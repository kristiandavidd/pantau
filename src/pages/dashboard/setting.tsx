import { EmptyLayout } from "@/components/layout";
import Sidebar from "@/components/sidebar";
import DashboardHeader from "@/components/dashboard_header";
import { Spacer, Input } from "@nextui-org/react";
import Link from "next/link";

export default function Setting(){
    return(
        <EmptyLayout 
        pageTitle="Setting | Pantau"
        description="ini dashboard Pantau">
            <div className="flex">
                <Sidebar/>
                <div className="flex flex-col items-center w-full px-5 py-3">
                    <DashboardHeader title="Setting"/>
                    <div className="w-1/3">
                        <img src="../../pp.svg" alt="" className="w-1/4 m-auto rounded-full"/>
                        <p className="text-[12px] text-pantau-green underline text-center m-2">Change Image</p>
                        <form action="" className="w-full">
                        <Spacer y={1} />
                            <Input type="text" width="100%"clearable bordered label="Username" size="sm" placeholder="Username"/>
                            <Spacer y={0.5} />
                            <Input type="email" width="100%"clearable bordered label="Email" size="sm" placeholder="Email"/>
                            <Spacer y={0.5} />
                            <Input type="password" label="Old Password" bordered width="100%" size="sm" placeholder="Old Password"/>
                            <Spacer y={0.5} />
                            <Input type="password" label="New Password" bordered width="100%" size="sm" placeholder="New Password"/>
                            <Spacer y={1} />
                            
                        </form>
                        <Link href="/dashboard/setting">
                            <button  className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-full m-auto font-semibold">
                                Update
                            </button> 
                        </Link>
                    </div>
                </div>
            </div>
            
        </EmptyLayout>
    )
}