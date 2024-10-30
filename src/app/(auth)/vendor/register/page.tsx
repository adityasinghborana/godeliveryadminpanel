import Image from "next/image";
import React from "react";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={38}
            className="mx-auto w-32"
          />
          <h1 className="text-2xl font-bold mt-4 text-black">Vendor’s Registration</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Matis acuman arcu ultricies.
          </p>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700">
              Mobile Number
            </label>
            <div className="flex">
              <input
                type="text"
                id="countryCode"
                value="+234"
                disabled
                className="w-16 px-4 py-2 border-r rounded-l-lg focus:outline-none bg-gray-100"
              />
              <input
                type="text"
                id="mobile"
                className="w-full px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              <input type="checkbox" className="mr-2" /> I’m not a robot
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Create Account
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
