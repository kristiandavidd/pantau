import {BellIcon} from "@heroicons/react/24/solid"
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/AuthProvider";
import { Cookies } from "react-cookie";
import { useRouter } from "next/router";
// import { useState } from "react";

export default function DashboardHeader(props: { title: string }) {
    const {title} = props;
    const router = useRouter();
    
    return(
        <div className="flex justify-between w-full h-[60px] items-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="flex items-center gap-3">
                <BellIcon className="w-[24px] text-pantau-dark-green hover:translate-y-[2px] duration-300 ease-in-out cursor-pointer hover:text-pantau-green"/>
                <img src="../../pp.svg" alt="" className="w-[30px] h-[30px] rounded-full"/>
                <h1>Admin</h1>
                <form>
                    <button onClick={() => {
                        signOut(auth)
                        .then(() => {
                            // localStorage.clear();
                            // sessionStorage.clear();
                            // setIsClient(true);
                            router.push("/login");
                            console.log("berhasil logout");
                        }).catch(() => {
                            alert("Logout failed");
                        })
                    }}
                        type="submit" className=" border-2 border-pantau-green text-center rounded-[8px] text-pantau-green hover:text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-fit m-4 font-semibold">
                        Logout
                    </button>
                </form>
            </div>
        </div>
        
        
    )
}

// export async function getServerSideProps(context: any) {
//     const cookies = new Cookies();
//     const email: boolean = cookies.get("email") !== undefined;
//     if (email) {
//         context.res.writeHead(302, { Location: "/login" });
//         context.res.end();
//         }

//         return {
//         redirect: {
//             destination: "/login",
//             permanent: false
//         }
//         };
//   }

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
  