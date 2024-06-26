
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/Navbar";
import Links from "./components/navbar/navlinks/Links";
import Nav from "./components/navbar/Nav";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default:'nextjs 14',
    template:'%s | nextgen'
  },
  description: "Generated by create next app",
};

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
   <>
    <html lang="en">
      
     
      
       <body className={` ${inter.className}`}>
    <div className="min-h-[100vh] h-auto bg-slate-300 w-[100vw] flex flex-col items-center justify-between">

        { <header className=" bg-slate-400 text-white text-2xl fixed z-40  py-4 px-6 w-full  ">
         <Nav/>
         </header> }
         <div className=" mt-24 w-full ">
         {children}
         </div>

        

        <div className="w-full bg-gray-600 py-8 px-2  ">
        <Footer/>
      </div>

      </div>
        </body>

     
      </html>
      </>
  );
}
