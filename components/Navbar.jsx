"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io";
import { RxDropdownMenu } from "react-icons/rx";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navItems = [
    {
    name: "Home",
    url: "/"
    },
     {
    name: "Categories",
    url: "/categories"
    },
     {
    name: "Write",
    url: "/write"
    },
    {
    name: "Contact",
    url: "/contact"
    },
    {
    name: "Sign Up",
    url: "/sign up"
    },
    {
    name: "Login",
    url: "/auth/login"
    },
        
    ]
    return (
        <nav className="flex items-center justify-between py-4 px-5 shadow-md">
            <Link href={"/"} className="flex items-center gap-2 z-50">
            <Image src={"/blog logo.png"}
            alt="blog.logo"
            width={1000}
            height={1000}
            className="w-10 h-10"/>
            <p className="text-3xl max-lg:hidden">Blogora</p>
            </Link>

            {/* desktop view */}
            <div className="flex items-center gap-7 max-lg:hidden">
                {navItems.map((item, index) =>(
               <Link key={index} href={item.url} className="text-lg hover:text-red-400 hover:underline">
                {item.name}
               </Link>
            ))}
            </div>

            {/* desktop view */}
            <div className="lg:hidden z-50">
                <button onClick={()=> setNavOpen(!navOpen)} className="text-2xl">
                  {navOpen ? <IoMdCloseCircle /> : <RxDropdownMenu />} 
                </button>
            </div>

            <div className={`bg-stone-100/90 h-dvh overflow-hidden w-full fixed top-0 left-0 lg:hidden ${navOpen ? "block" : "hidden"}`}>
                <div className="flex flex-col items-center gap-15 pt-15">
                    {navItems.map((item, index) =>(
                        <Link key={index} href={item.url} className="text-2xl">{item.name}
                        </Link>
                    ))}
                </div>
            </div>
    </nav>
    );
};

export default Navbar;