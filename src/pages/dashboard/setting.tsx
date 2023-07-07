import { EmptyLayout } from "@/components/layout";
import Sidebar from "@/components/sidebar";

export default function Setting(){
    return(
        <EmptyLayout 
        pageTitle="Setting | Pantau"
        description="ini dashboard Pantau">
            <div className="flex">
                <Sidebar/>
                <h1>ini setting</h1>    
            </div>
        </EmptyLayout>
    )
}