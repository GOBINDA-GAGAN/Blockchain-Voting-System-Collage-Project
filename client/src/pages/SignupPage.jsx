import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const SignupPage = () => {
  const { signup } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await signup(formData);
    console.log(res.message);          // log success message
    toast.success("Register Successfully");
    navigate("/login");
  } catch (err) {
    toast.error(err.response?.data?.message || "Register Failed"); // use err here
    console.error("Register Error:", err);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-white to-green-100">
      <div className="w-full max-w-4xl  shadow-2xl rounded-xl overflow-hidden flex bg-gradient-to-b  from-sky-200 via-[#eae9e7] to-green-200">
        {/* Left Side - Illustration */}
        <div className="hidden md:flex w-1/2">
          <img
            src="/Proud to be an Indian.jpg"
            alt="Signup Illustration"
            className="w-full  object-center"
          />
        </div> 

        {/* Right Side - Form */}
        <div className="w-full md:w-7/12 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            Join the Journey 🇮🇳
          </h2>
          <p className="text-sm text-gray-500 mb-4 text-center">
            Shape the future with your voice.
          </p>

          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

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
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  placeholder="Enter password"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-green-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>
          {/* Link to Login */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-orange-600 font-semibold hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
