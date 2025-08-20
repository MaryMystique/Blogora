"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io";
import { RxDropdownMenu } from "react-icons/rx";
import { useSession, signOut } from "next-auth/react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const { data: session} = useSession();

    const  [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    console.log(session);

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
    name: "Contact",
    url: "/contact"
    },
    {
    name: "Blog",
    url: "/blog",
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

            {session ? (
              <div>
      <button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={session?.user?.image} alt={session?.user?.name.slice(0,1). toUpperCase()}  className='w-10 h-10 rounded-full' />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}> <Link href={"/profile"}>Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link href={"/post-blog"}>Post your blog here</Link></MenuItem>
        <MenuItem onClick={handleClose}> <button  onClick={() => signOut()}>Log Out</button></MenuItem>
      </Menu>
       </div>
                ) : (
            <Link
            href={"/auth/login"}
            className='text-lg hover:text-red-700 hover:underline'>
            LogIn
            </Link>
            )}
            </div>

            {/* mobile and tab view */}
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