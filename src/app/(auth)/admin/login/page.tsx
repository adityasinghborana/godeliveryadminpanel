'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Login: React.FC = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl">
        <div className="bg-primary-foreground p-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={38}
            className="mx-auto w-32"
          />
        </div>
        <div className="text-center mb-6 p-4">
          <h1 className="text-2xl font-bold mt-4 text-black">Admin Login</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Matis acuman arcu ultricies.
          </p>
          <div className="max-w-md m-auto text-start mt-6">
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F6F6F6]"
                  placeholder="Email ID"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F6F6F6]"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4 text-center">
                <p  className="text-secondary">
                  Forgot Password? <a href="#" className="text-[#09323E] hover:underline">Click Here</a>
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-[#09323E] text-white py-2 rounded-lg hover:bg-[#09323E]/90 transition duration-300"
              >
                Login
              </button>
            </form>
            <div className="mt-6 text-center text-secondary">
              <p>
                Didn’t have account?{" "}
                <button onClick={()=>router.push('/admin/register')} className="text-[#09323E] hover:underline">
                  Register here
                </button>
              </p>
            </div>
          </div>
          <p className="text-black mb-2 py-10">
            Lorem ipsum dolor sit amet consectetur. Tristique accumsan dui ut
            sit in suspendisse iaculis nec gravida. Ut massa amet amet eleifend
            dui amet. Id ac lectus sed hendrerit commodo cras.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
