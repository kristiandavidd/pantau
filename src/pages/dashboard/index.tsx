import { EmptyLayout } from "@/components/layout"
import Sidebar from "@/components/sidebar"

export default function dashboard() {
    return(
        <EmptyLayout 
        pageTitle="Dashboard | Pantau"
        description="ini dashboard Pantau">
            <div className="flex">
                <Sidebar/>
                <h1>ini dashboard</h1>    
            </div>
        </EmptyLayout>
    )
}