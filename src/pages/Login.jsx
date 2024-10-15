import React from "react";
import LeftSection from "../components/login-page/LeftSection";
import RightSection from "../components/login-page/RightSection";

export default function Login() {
   return (
      <div className="flex min-h-screen">
         <LeftSection />
         <RightSection />
      </div>
   );
}
