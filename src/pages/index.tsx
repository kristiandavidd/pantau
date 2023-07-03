import { Layout } from "@/components/layout";
import Jumbotron from "@/components/jumbotron";
import Problems from "@/components/problems";
import Steps from "@/components/steps";
import Reason from "@/components/reason";

export default function Home() {
  return(
    <Layout 
    pageTitle="Pantau | Plant Monitoring Solution"
    description="Ini Landing Page Pantau">
      <Jumbotron/>
      <Problems/>
      <Steps/>
      <Reason/>
    </Layout>
  )
}