import { EmptyLayout } from "@/components/layout";
import Sidebar from "@/components/sidebar";

export default function Setting(){
    return(
        <EmptyLayout 
        pageTitle="Monitor | Pantau"
        description="ini monitor Pantau">
            <div className="flex">
                <Sidebar/>
                <h1>ini monitor</h1>    
            </div>
        </EmptyLayout>
    )
}