import {BellIcon} from "@heroicons/react/24/solid"
import { signOut } from "firebase/auth";
import { auth, useAuth } from "@/firebase/AuthProvider";
import { Cookies } from "react-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Users from "@/data/Users";
import getDataUser from "@/firebase/getData";
import { Avatar } from "@mantine/core";

export default function DashboardHeader(props: { title: string }) {
    const [data, setData] = useState<Users>({} as Users);
    const {title} = props;
    const { user } = useAuth();
    const router = useRouter();
    
    //run 2 times gk tau knp :(
    useEffect(() => {
        if (user === null){
            router.push("/login");
        }
    }, [user]);
      
    const email = user?.email ? user.email : "user";
    async function callData() {
        await getDataUser(email).then((res) => {
            setData(res);
        });
    }
    callData();

    return(
        <div className="flex justify-between w-full h-[60px] items-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="flex items-center gap-3">
                <BellIcon className="w-[24px] text-pantau-dark-green hover:translate-y-[2px] duration-300 ease-in-out cursor-pointer hover:text-pantau-green"/>
                <Avatar radius="xl" size="md" color="green" src={data.img}></Avatar>
                <h3>{data.username}</h3>
                <form>
                    <button onClick={() => {
                        signOut(auth)
                        .then(() => {
                            localStorage.clear();
                            indexedDB.deleteDatabase('firebaseLocalStorageDb');                     
                            router.push("/login");
                        }).catch(() => {
                            alert("Logout failed");
                        });

                    }}
                        type="submit" className=" border-2 border-pantau-green text-center rounded-[8px] text-pantau-green hover:text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-fit m-4 font-semibold">
                        Logout
                    </button>
                </form>
            </div>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const cookies = new Cookies();
    const email: boolean = cookies.get("email") !== undefined;
    if (email) {
        context.res.setHeader("Location", "/login");
        context.res.statusCode = 302;
        context.res.end();
    }
    return { props: {} };
}