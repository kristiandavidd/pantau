import { EmptyLayout } from "@/components/layout";
import Sidebar from "@/components/sidebar";
import DashboardHeader from "@/components/dashboard_header";

export default function Setting(){
    return(
        <EmptyLayout 
        pageTitle="Monitor | Pantau"
        description="ini monitor Pantau">
            <div className="flex">
                <Sidebar/>
                <div className="flex flex-col items-center w-full px-5 py-3">
                    <DashboardHeader title="Monitor"/>
                    
                </div>
            </div>
        </EmptyLayout>
    )
}