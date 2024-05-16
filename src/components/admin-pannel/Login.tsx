import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="bg-black min-h-screen grip place-items-center">
        <button className="bg-white px-8 py-4 flex gap-2 items-center">
            <FcGoogle size={30}/> Login with Google
        </button>
    </div>
  )
}

export default Login
