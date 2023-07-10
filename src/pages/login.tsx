import { EmptyLayout } from "@/components/layout";
import Link from "next/link";
import { Checkbox, Input, Spacer} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/firebase/AuthProvider";
import { signInWithEmailAndPassword } from "@firebase/auth";


function LoginPart() {
  const [ email, setEmail ] = useState("");
  const [ pass, setPass ] = useState("");
  const router = useRouter();
  
  // useEffect(() => {
  // if (pass != null) 
  //   router.push("/dashboard");
  // }, [pass, router, setPass]);
    
  const loginHandler = () => {  
    signInWithEmailAndPassword(auth, email, pass)
    .then((useCredential) => {
      // Signed In
      const user = useCredential.user;
      console.log(user);
      alert("Successfully logged in");
      router.push("/dashboard");
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
    })
  }
  return (
    <div>
      <Spacer y={1} />
      <Input
        placeholder="Email"
        clearable
        label="Email"
        type="email"
        width="100%"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Spacer y={0.5} />
      <Input.Password
        placeholder="Password"
        label="Password"
        width="100%"
        onChange={(e) => setPass(e.target.value)}
      />
      <Spacer y={0.5} />
      <div className="flex justify-between">
        <Checkbox color="success" size="xs" labelColor="default">
        Ingat Saya
        </Checkbox>
        <p className="text-sm underline">Lupa Password?</p>
      </div>
      <Spacer y={1} />
      <button onClick={loginHandler} className="bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-full m-2 font-semibold">
        Masuk
      </button>
    </div>
  );
}


export default function login(){
  return(
    <EmptyLayout
    pageTitle="Login | Pantau"
    description="Login Page Pantau">
      <div className="flex flex-col items-center h-screen">
        <Link href="/" className="flex items-center mx-auto my-4 w-fit">
          <img src="../../logo.svg" alt="" className="w-[40px]"/>    
          <p className="text-lg font-bold">Pantau</p>
        </Link>
        <div className="flex flex-col items-center justify-center w-2/3 md:w-1/2 lg:w-1/4">      
          <h1 className="text-2xl font-bold">Masuk</h1>
          <LoginPart></LoginPart>        
          <Link href="/signup" className="border-2 border-pantau-green/0 text-center rounded-[8px] text-pantau-green hover:bg-pantau-green/20 ease-in-out duration-300 text-sm py-2 px-8 w-full font-semibold m-2 hover:border-pantau-green/60 hover:text-pantau-dark-green">
              Daftar
          </Link>
        </div>
      </div>
    </EmptyLayout>
  )
}

