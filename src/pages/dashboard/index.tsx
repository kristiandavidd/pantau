import { EmptyLayout } from "@/components/layout"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard_header"

export default function dashboard() {
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