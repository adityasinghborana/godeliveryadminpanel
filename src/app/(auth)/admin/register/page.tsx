'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Register: React.FC = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl border w-full max-w-3xl">
        <div className="bg-primary-foreground p-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={38}
            className="mx-auto w-32"
          />
        </div>
        <div className="text-center p-4">
          <h1 className="text-2xl font-bold mt-4 text-black">
            Admin Registration
          </h1>
          <p className="text-secondary mt-2">
            Lorem ipsum dolor sit amet consectetur. Matis acuman arcu ultricies.
          </p>
          <div className="max-w-sm m-auto mt-6">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="countryCode"
                    placeholder="+234"
                    className="w-20 px-4 py-2 border-r rounded-l-lg focus:outline-none bg-gray-100 border"
                  />
                  <input
                    type="text"
                    id="mobile"
                    className="w-full px-4 py-2 border rounded-r-lg focus:outline-none bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>
              <div className="mb-4 text-start">
                <label className="block text-gray-700">
                  <input type="checkbox" className="mr-2" /> I’m not a robot
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#09323E] hover:bg-[#09323E]/90 text-white py-2 rounded-lg transition duration-300"
              >
                Create Account
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-secondary">
                Already have an account?{" "}
                <button onClick={() => router.push('/admin/login')} className="text-[#09323E] hover:underline">
                  Login
                </button>
              </p>
            </div>
          </div>
          <p className="text-secondary mb-2 py-10">
            Lorem ipsum dolor sit amet consectetur. Tristique accumsan dui ut
            sit in suspendisse iaculis nec gravida. Ut massa amet amet eleifend
            dui amet. Id ac lectus sed hendrerit commodo cras.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
