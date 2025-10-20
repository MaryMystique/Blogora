"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { RxDropdownMenu } from "react-icons/rx";
import { useSession, signOut } from "next-auth/react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: "Home", url: "/" },
    { name: "Categories", url: "/categories" },
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <nav className="flex items-center justify-between py-4 px-5 shadow-md">
      {/* Logo */}
      <Link href={"/"} className="flex items-center gap-2 z-50">
        <Image
          src={"/blog logo.png"}
          alt="blog.logo"
          width={1000}
          height={1000}
          className="w-10 h-10"
        />
        <p className="text-3xl max-lg:hidden">Blogora</p>
      </Link>

      {/* Desktop Nav */}
      <div className="flex items-center gap-7 max-lg:hidden">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="text-lg hover:text-red-400 hover:underline"
          >
            {item.name}
          </Link>
        ))}

        {session ? (
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img
              src={session?.user?.image}
              alt={session?.user?.name?.slice(0, 1).toUpperCase()}
              className="w-10 h-10 rounded-full"
            />
          </button>
        ) : (
          <Link
            href={"/auth/login"}
            className="text-lg hover:text-red-700 hover:underline"
          >
            Log In
          </Link>
        )}
      </div>

      {/* Mobile Nav Toggle */}
      <div className="lg:hidden z-50">
        <button onClick={() => setNavOpen(!navOpen)} className="text-2xl">
          {navOpen ? <IoMdCloseCircle /> : <RxDropdownMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="bg-stone-100/90 h-dvh overflow-hidden w-full fixed top-0 left-0 lg:hidden">
          <div className="flex flex-col items-center gap-6 pt-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="text-2xl"
                onClick={() => setNavOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {session ? (
              <button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <img
                  src={session?.user?.image}
                  alt={session?.user?.name?.slice(0, 1).toUpperCase()}
                  className="w-10 h-10 rounded-full"
                />
              </button>
            ) : (
              <Link
                href={"/auth/signin"}
                className="text-2xl hover:text-yellow-700 hover:underline"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Shared Dropdown Menu (single instance) */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <MenuItem onClick={handleClose}>
          <Link href={"/profile"}>Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={"/post-blog"}>Post your Blog</Link>
        </MenuItem>
        <MenuItem onClick={() => signOut()}>Log Out</MenuItem>
      </Menu>
    </nav>
  );
};

export default Navbar;
