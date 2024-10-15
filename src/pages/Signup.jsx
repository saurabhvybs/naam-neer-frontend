import React from "react";
import LeftSection from "../components/login-page/LeftSection";
import RightSection from "../components/signup-page/RightSection";

function Signup() {
   return (
      <div className="flex min-h-screen">
         <LeftSection />
         <RightSection />
      </div>
   );
}

export default Signup;
