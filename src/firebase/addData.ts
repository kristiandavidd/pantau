import app from "@/firebase/clientApp";
import { getFirestore, doc, setDoc } from "firebase/firestore";


const db = getFirestore(app);

// Add a new document in collection variables
export default async function addData(collection : any, id : any, docData: any){
  let res, error = null;

  try {
    const collRef = doc(db, collection, id);
    res = await setDoc(collRef, docData, {merge: true}); //option merge to avoid overwriting entire documents
  }catch (e){
    error = e;
  }

  return {res, error};
}