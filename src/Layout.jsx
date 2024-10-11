import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
   const location = useLocation();

   const isHomePage = location.pathname === '/';

   return (
      <div className="flex flex-col min-h-screen">
         {isHomePage && <Navbar />}
         <main className="flex-grow">
            <Outlet />
         </main>
         {isHomePage && <Footer />}
      </div>
   );
}
