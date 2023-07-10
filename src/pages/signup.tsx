import { EmptyLayout } from "@/components/layout";
import { isEmail, matchesField, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { PasswordInput, Space, TextInput } from "@mantine/core";
import { useAuth } from "@/firebase/AuthProvider";
import Users from "@/data/Users";
import addData from "@/firebase/addData";
import Link from "next/link";
import { useRouter } from "next/router";

function SignupPart(){
    const router = useRouter();
    const { signUp } = useAuth();
    const form = useForm({
        initialValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
        validate: {
            email: isEmail("Invalid email"),
            confirmPassword: matchesField("password", "Password unmatched"),
        },
    });
    const register = async (user: Users) => {
        const data = {
            email: user.email,
            username: user.username,
            img : "https://firebasestorage.googleapis.com/v0/b/pantau-1234.appspot.com/o/userImg%2Fdefault.jpg?alt=media&token=a1262067-c736-40a9-9f70-3c31bb6e5785",
        };
        try {
            await signUp(user.email, user.upassword).then(() => {
                addData("users", user.email, data);
            });
            try {
                indexedDB.deleteDatabase('firebaseLocalStorageDb');
                router.push("/login");
                console.log("Berhasil buat akun");
            } catch (e) {
                console.log("Gagal buat akun");
                notifications.show({
                    title: "Error",
                    message: "Failed to signed up",
                    color: "red",
                });
            }
        } catch (error) {
            alert("Pendaftaran gagal");
        }
    };
    
    return (
        <div className="w-full">
            <Space h="lg" />
            <div className="mt-2">
                <TextInput
                    id="email"
                    label="Email"
                    withAsterisk={true}
                    placeholder="example@email.com"
                    {...form.getInputProps("email")}
                />
            </div>
            <Space h="sm" />
            <div>
                <TextInput
                    id="username"
                    withAsterisk={true}
                    label="Username"
                    placeholder="Username"
                    {...form.getInputProps("username")}
                />
            </div>
            <Space h="sm" />
            <div className="mt-2">
                <PasswordInput
                    placeholder="********"
                    label="Password"
                    id="password"
                    required
                    {...form.getInputProps("password")}
                />
            </div>
            <Space h="sm" />
            <div className="mt-2">
                <PasswordInput
                    placeholder="********"
                    label="Masukan Ulang Password"
                    required
                    {...form.getInputProps("confirmPassword")}
                />
            </div>
            <Space h="sm" />
        <form 
        onClick={form.onSubmit((values) => {
            const dataNew: Users = {
                email: values.email,
                username: values.username,
                password: values.password,
                upassword: values.confirmPassword,
                img: "https://firebasestorage.googleapis.com/v0/b/pantau-1234.appspot.com/o/userImg%2Fdefault.jpg?alt=media&token=a1262067-c736-40a9-9f70-3c31bb6e5785"
            };
            register(dataNew);
        })}
        >
            <button 
                className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-full font-semibold">
                Daftar
            </button>
        </form>
        </div>
    )
}
    
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