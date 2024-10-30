import Image from "next/image";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="text-center mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={38}
            className="mx-auto w-32"
          />
          <h1 className="text-2xl font-bold mt-4 text-black">Admin Login</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Matis acuman arcu ultricies.
          </p>
        </div>
        <div className="max-w-md m-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password? Click Here
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center text-black">
            <p>
              Didn’t have account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
        <p className="text-black mb-2 py-10 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur. Tristique accumsan dui ut sit
          in suspendisse iaculis nec gravida. Ut massa amet amet eleifend dui
          amet. Id ac lectus sed hendrerit commodo cras.
        </p>
      </div>
    </div>
  );
};

export default Login;
