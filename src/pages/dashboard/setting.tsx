import { EmptyLayout } from "@/components/layout";
import Sidebar from "@/components/sidebar";
import DashboardHeader from "@/components/dashboard_header";
import { Spacer } from "@nextui-org/react";
import { useAuth } from "@/firebase/AuthProvider";
import { ChangeEvent, useState } from "react";
import getDataUser from "@/firebase/getData";
import Users from "@/data/Users";
import { Avatar, TextInput } from "@mantine/core";

export default function setting(){
    const [data, setData] = useState<Users>({} as Users);
    const { user } = useAuth();

    const username = user?.email ? user.email : "user";
    async function callData() {
        await getDataUser(username).then((res) => {
            setData(res);
        });
    }
    callData();

    return(
        <EmptyLayout 
        pageTitle="Setting | Pantau"
        description="ini dashboard Pantau">
            <div className="flex">
                <Sidebar/>
                <div className="flex flex-col items-center w-full px-5 py-3">
                    <DashboardHeader title="Setting"/>
                    <div className="w-1/3 items-center">                                  
                        <Avatar radius="xl" size="md" src={data.img}></Avatar>
                        <strong className="text-[12px] text-pantau-green underline text-center m-2">Change image</strong>
                        <input
                            className="block w-0 h-0"
                            name="file"
                            type="file"
                            // onChange={onFileUploadChange}
                        />
                        <form action="" className="w-full">
                            <Spacer y={1} />
                            <TextInput type="text" width="100%" disabled label="Username" radius="md" placeholder={data.email}/>
                            <Spacer y={0.5} />
                            <TextInput type="email" width="100%" disabled label="Email" radius="md" placeholder={data.username}/>
                            <Spacer y={1} />
                        </form>
                            <button
                                // disabled={!previewUrl}
                                // onClick={onUploadFile}
                                className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-full m-auto font-semibold">
                                Update Image
                            </button>
                    </div>
                </div>
            </div>
            
        </EmptyLayout>
    )
}