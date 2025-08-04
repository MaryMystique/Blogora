"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const Navbar = () => {

    return(
        <nav>
            <Link>
            <Image src={"/blog logo.png"}
            alt="blog.logo"
            width={1000}
            height={1000}
            className="w-10 h-10"/>
            </Link>
        </nav>
    )
}