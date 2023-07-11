import app from "@/firebase/clientApp";
import { getFirestore, doc, setDoc } from "firebase/firestore";


const db = getFirestore(app);

// Add a new document in collection variables
export default async function addData(collection : any, id : any, docData: any){
  const collRef = doc(db, collection, id);
  return setDoc(collRef, docData, {merge: true});
}