import { EmptyLayout } from "@/components/layout"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard_header"
import { useAuth } from "@/firebase/AuthProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function dashboard() {
    const { user } = useAuth();
    const router = useRouter();
    
    //run 2 times
    useEffect(() => {
        if (user === null){
            // console.log("Pindah ke login dari file dasindex");
            router.push("/login");
        }
    }, [user]);

    return(
        <EmptyLayout 
        pageTitle="Dashboard | Pantau"
        description="ini dashboard Pantau">
            
            <div className="flex">
                <Sidebar/>
                <DashboardHeader title="Dashboard"/>
            </div>
        </EmptyLayout>
    )
}