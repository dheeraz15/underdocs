import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <Button
                className='w-44 mt-10'
                color='red'
                buttonType="filled"
                ripple="light"
                onClick={signIn}>
                Login
            </Button>
        </div>
    );
};

export default Login;
