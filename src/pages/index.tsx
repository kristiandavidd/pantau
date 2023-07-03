import { Layout } from "@/components/layout";
import Jumbotron from "@/components/jumbotron";
import Problems from "@/components/problems";

export default function Home() {
  return(
    <Layout 
    pageTitle="Pantau | Plant Monitoring Solution"
    description="Ini Landing Page Pantau">
      <Jumbotron/>
      <Problems/>
    </Layout>
  )
}