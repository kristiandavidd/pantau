import User from "@/data/Users";
import app from "@/firebase/clientApp";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(app);
const userRef = collection(db, "users");

//query for all of the documents that meet a certain condition
export default async function getDataUser(condition: unknown) {
  const q = query(userRef, where("email", "==", condition));

  const snapshot = await getDocs(q);
  const data: User = {
    username: "",
    email: "",
    password: "",
    upassword: "",
    img : "",
  };

  const res = snapshot.docs.map((doc) => {
    data.username = doc.data().username;
    data.email = doc.data().email;
    data.password = doc.data().pass;
    data.upassword = doc.data().upass;
    data.img = doc.data().img;
  });

  return data;
}