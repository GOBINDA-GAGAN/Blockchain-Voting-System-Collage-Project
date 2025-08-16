import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-white to-green-100">
      <div className="flex w-[90%] max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side Image */}
        <div className="hidden md:flex w-1/2">
          <img
            src="/loginImage.jpg"
            alt="Login Illustration"
            className="w-full drop-shadow-lg"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-6 bg-gradient-to-b  from-sky-200 via-[#eae9e7] to-green-200">
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-black text-center mb-2">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Please login to continue
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
                           focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                           transition duration-200"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
                             focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                             pr-10 transition duration-200"
                  required
                />
                {/* Eye Toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-orange-600 hover:text-orange-800"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                Remember me
              </label>
              <a href="#" className="text-orange-600 hover:underline font-medium">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-green-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg 
                             hover:bg-gray-100 transition font-medium text-gray-700">
            <FcGoogle size={25} />
            <span className="text-sm">Continue with Google</span>
          </button>

          {/* Signup Link */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-orange-600 font-medium hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
