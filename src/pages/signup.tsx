import { EmptyLayout } from "@/components/layout";
import Link from "next/link";
import { Input, Spacer} from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@/firebase/AuthProvider";


function SignupPart(){
    const [ email, setEmail ] = useState("");
    const [ pass, setPass ] = useState("");
    const router = useRouter();

    const signupHandler = () => {
        createUserWithEmailAndPassword(auth, email, pass)
        .then((useCredential) => {
        // Created an account
        const user = useCredential.user;
        console.log(user);
        alert("Successfully created an");
        router.push("/dashboard/setting");
        })
        .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        })
    }
    return(
    <div>
        <form action="" className="w-full">
            <Spacer y={1} />
                <Input type="email" width="100%"clearable bordered label="Email" size="sm" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <Spacer y={0.5} />
                <Input type="text" width="100%"clearable bordered label="Username" size="sm" placeholder="Username"/>
                <Spacer y={0.5} />
                <Input type="password" label="Password" bordered width="100%" size="sm" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
                <Spacer y={0.5} />
                <Input type="password" label="Ulangi Password" bordered width="100%" size="sm" placeholder="Password"/>
                <Spacer y={0.5} />
        </form>
        <button onClick={signupHandler} className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-full m-2 font-semibold">
            Daftar
        </button>
    </div>
    )
}

// function SignupPart(){
//     const router = useRouter();
//     const { signUp } = useAuth();
//     const form = useForm({
//       initialValues: {
//         email: "",
//         username: "",
//         password: "",
//         confirmPassword: "",
//       },
//       validate: {
//         email: isEmail("Invalid email"),
//         confirmPassword: matchesField("password", "Password unmatched"),
//       },
//     });
//     const register = async (user: User) => {
//       const data = {
//         email: user.email,
//         username: user.username,
//       };
//       try {
//         await signUp(user.email, user.upassword);
//         try {
//           const { res, error } = await addData("users", user.email, data);
//           notifications.show({
//             title: "Berhasil",
//             message: "Successfully signed up",
//             color: "green",
//           });
//           router.push("/login");
//         } catch (e) {
//           notifications.show({
//             title: "Error",
//             message: "Failed to signed up",
//             color: "red",
//           });
//         }
//       } catch (e) {
//         notifications.show({
//           title: "Registrasi failed",
//           message: "Email has been registered",
//           color: "red",
//         });
//       }
//     };
    
//     return (
//         <div>
//             <form 
//                 onSubmit={form.onSubmit((values) => {
//                     const dataNew: User = {
//                         email: values.email,
//                         username: values.username,
//                         password: values.password,
//                         upassword: values.confirmPassword,
//                     };
//                     register(dataNew);
//                   })}
//                 className="w-full">
//             <Spacer y={1} />
//                 {/* <Input type="email" width="100%"clearable bordered label="Email" size="sm" placeholder="Email"/> */}
//                 <div className="mt-2">
//                 <TextInput
//                     // icon={<At size={20} />}
//                     id="email"
//                     label="Email"
//                     withAsterisk={true}
//                     placeholder="example@email.com"
//                     {...form.getInputProps("email")}
//                 />
//                 </div>
//                 <Spacer y={0.5} />
//                 {/* <Input type="text" width="100%"clearable bordered label="Username" size="sm" placeholder="Username"/> */}
//                 <div>
//                 <TextInput
//                     // icon={<UserCircle size={20} />}
//                     id="username"
//                     withAsterisk={true}
//                     label="Nama Lengkap"
//                     placeholder="Masukan nama lengkap"
//                     {...form.getInputProps("username")}
//                 />
//                 </div>
//                 <Spacer y={0.5} />
//                 {/* <Input type="password" label="Password" bordered width="100%" size="sm" placeholder="Password"/> */}
//                 <div className="mt-2">
//                 <PasswordInput
//                     // icon={<Fingerprint size={20} />}
//                     placeholder="********"
//                     label="Password"
//                     id="password"
//                     required
//                     {...form.getInputProps("password")}
//                 />
//                 </div>
//                 <Spacer y={0.5} />
//                 {/* <Input type="password" label="Ulangi Password" bordered width="100%" size="sm" placeholder="Password"/> */}
//                 <div className="mt-2">
//                 <PasswordInput
//                     // icon={<Fingerprint size={20} />}
//                     placeholder="********"
//                     label="Masukan Ulang Password"
//                     required
//                     {...form.getInputProps("confirmPassword")}
//                 />
//                 </div>
//                 <Spacer y={0.5} />
//             </form>
//             <button className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-full m-2 font-semibold">
//                 Daftar
//             </button>
//         </div>
//     )
// }
// export default function signup() {
//     return(
//         <EmptyLayout
//         pageTitle="Sign Up | Pantau"
//         description="Sign Up Page Pantau">
//             <div className="flex flex-col items-center h-screen">
//             <Link href="/" className="flex items-center mx-auto my-4 w-fit">
//                     <img src="../../logo.svg" alt="" className="w-[40px]"/>    
//                     <p className="text-lg font-bold">Pantau</p>
//                 </Link>
//                 <div className="flex flex-col items-center justify-center w-2/3 md:w-1/2 lg:w-1/4">
//                     <h1 className="text-2xl font-bold">Daftar</h1>
//                     <SignupPart></SignupPart>
//                     <Link href="/login" className="border-2 border-pantau-green/0 text-center rounded-[8px] text-pantau-green hover:bg-pantau-green/20 ease-in-out duration-300 text-sm py-2 px-8 w-full font-semibold m-2 hover:border-pantau-green/60 hover:text-pantau-dark-green">
//                         Masuk
//                     </Link>
//                 </div>
//             </div>
            
//         </EmptyLayout>
//     )
// }

export default function signup() {
    return(
        <EmptyLayout
        pageTitle="Sign Up | Pantau"
        description="Sign Up Page Pantau">
            <div className="flex flex-col items-center h-screen">
            <Link href="/" className="flex items-center mx-auto my-4 w-fit">
                    <img src="../../logo.svg" alt="" className="w-[40px]"/>    
                    <p className="text-lg font-bold">Pantau</p>
                </Link>
                <div className="flex flex-col items-center justify-center w-2/3 md:w-1/2 lg:w-1/4">
                
                    <h1 className="text-2xl font-bold">Daftar</h1>        
                    <SignupPart></SignupPart>
                    <Link href="/login" className="border-2 border-pantau-green/0 text-center rounded-[8px] text-pantau-green hover:bg-pantau-green/20 ease-in-out duration-300 text-sm py-2 px-8 w-full font-semibold m-2 hover:border-pantau-green/60 hover:text-pantau-dark-green">
                        Masuk
                    </Link>
                </div>
            </div>
            
        </EmptyLayout>
    )
}