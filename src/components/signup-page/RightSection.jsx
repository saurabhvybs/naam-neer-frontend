import React from "react";
import { Link } from "react-router-dom";

const RightSection = () => {
   return (
      <div className="flex-1 bg-white flex flex-col justify-center items-center px-10 py-8">
         <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-4">Welcome to NAM NEER !</h2>
            <p className="text-gray-600 mb-8">
               Lorem ipsum dolor sit amet consectetur. Venenatis magna odio id
               posuere felis.
            </p>

            <form className="space-y-6">
               <div>
                  <label
                     htmlFor="phone"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Phone Number
                  </label>
                  <input
                     type="text"
                     id="phone"
                     className="mt-1 w-full px-4 py-2 border border-[#8897AD] rounded-md focus:ring focus:ring-[#1d4658]"
                     placeholder="Enter phone number"
                  />
               </div>

               <div>
                  <label
                     htmlFor="email"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Email 
                  </label>
                  <input
                     type="email"
                     id="email"
                     className="mt-1 w-full px-4 py-2 border border-[#8897AD] rounded-md focus:ring focus:ring-[#1d4658]"
                     placeholder="Enter Your Email ID"
                  />
                  <div className="text-right mt-2">
                     <a
                        href="#"
                        className="text-blue-600 hover:underline text-sm"
                     >
                        Forgot Password?
                     </a>
                  </div>
               </div>

               <button
                  type="submit"
                  className="w-full text-white py-2 rounded-md hover:bg-opacity-90 transition"
                  style={{
                     background: "linear-gradient(to bottom, #1d4658, #3f97b3)",
                  }}
               >
                  Continue
               </button>

               <div className="flex items-center justify-between mt-6">
                  <span className="border-t flex-grow mr-2"></span>
                  <span className="text-gray-500">Or</span>
                  <span className="border-t flex-grow ml-2"></span>
               </div>

               <button className="w-full bg-[#f7fbff] border border-none py-2 rounded-md mt-4 flex justify-center items-center space-x-2 hover:bg-gray-100">
                  <img
                     src="/assets/google.png"
                     alt="Google"
                     className="w-8 h-8"
                  />
                  <span>Sign in with Google</span>
               </button>
            </form>

            <p className="text-center mt-6">
               Already have an account?{" "}
               <Link to={"/login"} className="text-blue-600 hover:underline">
                  login
               </Link>
            </p>
         </div>

         <div className="mt-8 text-[#959CB6] text-[16px]">
            &copy; 2024 All rights reserved.
         </div>
      </div>
   );
};

export default RightSection;
