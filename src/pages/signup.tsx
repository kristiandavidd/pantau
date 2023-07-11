import { EmptyLayout } from "@/components/layout";
import { Space, TextInput, PasswordInput } from "@mantine/core";
import Link from "next/link";
import { isEmail, matchesField, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useAuth } from "@/firebase/AuthProvider";
import Users from "@/data/Users";
import addData from "@/firebase/addData";
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
            img : "",
        };
        try {
            await signUp(user.email, user.upassword).then(() => {
                addData("users", user.email, data);
            });
            try {
                indexedDB.deleteDatabase('firebaseLocalStorageDb');
                router.push("/login");
            } catch (e) {
                notifications.show({
                    title: "Error",
                    message: "Failed to signed up",
                    color: "red",
                });
            }
        } catch (error) {
            alert("Registration failed");
        }
    };

    return (
        <div className="w-full">
            <Space h="lg" />
            <TextInput
                id="email"
                label="Email"
                withAsterisk={true}
                radius="md"
                placeholder="Email"
                {...form.getInputProps("email")}
            />
            <Space h="sm" />
            <TextInput
                id="username"
                withAsterisk={true}
                label="Username"
                placeholder="Username"
                radius="md"
                {...form.getInputProps("username")}
            />
            <Space h="sm" />
            <PasswordInput
                placeholder="********"
                label="Password"
                id="password"
                radius="md"
                required
                {...form.getInputProps("password")}
            />
            <Space h="sm" />
            <PasswordInput
                placeholder="********"
                label="Ulangi Password"
                radius="md"
                required
                {...form.getInputProps("confirmPassword")}
            />
            <Space h="sm" />      
            <form 
                onClick={form.onSubmit((values) => {
                    const dataNew: Users = {
                        email: values.email,
                        username: values.username,
                        password: values.password,
                        upassword: values.confirmPassword,
                        img: ""
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

export default function Login() {
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