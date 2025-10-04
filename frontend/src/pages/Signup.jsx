import React from "react";
import shield from "../assets/shield.png"; // make sure your image path is correct

const Signup = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/cbc46bb85436f80a5e71269837433f2d01d0b782?width=4030')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-8">
        {/* Left: Form */}
        <div className="w-[200px] h-[600px] md:w-1/2 ml-40 bg-gray-800  rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col justify-center items-center mb-6">
          <h2 className="text-cyan-400 text-lg font-bold mb-2">LOGO</h2>
          <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
          <p className="text-gray-300 mb-6">
            Welcome! Please Fill In The Details To Get Started
          </p>
        </div>
          <form className="space-y-4">
            {/* Name fields */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Enter The Password"
              className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-gray-300 text-center">
            Already Have An Account?{" "}
            <span className="text-cyan-400 cursor-pointer hover:underline">
              Sign In
            </span>
          </p>
        </div>

        {/* Right: Shield Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src={shield} alt="shield" className="max-w-sm md:max-w-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
