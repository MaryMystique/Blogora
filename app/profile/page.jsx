import { auth } from '@/auth';
import UpdateProfile from '@/components/UpdateProfile';
import { redirect } from 'next/navigation';
import React from 'react';
import { FiLogOut } from "react-icons/fi";

const page = async () => {
    const session = await auth()
    const uid = session?.user?.id;
    const userName = session?.user?.name;

    if (!session) {
      redirect("/auth/login")
    }
  return (
    <main className='min-h-dvh'>
     <div className="flex flex-col items-center justify-center mt-10">
      <h1 className='font-bold text-gray-500 text-3xl md:text-4xl flex text-center'>
        Profile
      </h1>
       <div className="w-full h-full mt-17 flex flex-col items-center justify-center gap-8 md:max-w-4xl p-3 mx-auto shadow-md rounded-lg relative">
        <img src={session?.user?.image} 
        alt={session?.user?.name.slice(0, 1).toUpperCase()}
        className="w-24 h-24 rounded-full sticky top-0"/>

        <h1 className="text-3xl font-light">{session?.user?.name}</h1>
        <p>{session?.user?.email}</p>

          <form
      action={async () => {
        "use server"
        await signOut()
      }}
     >
      <button className='flex justify-end gap-3 bg-red-500 text-white px-10 py-4 hover:bg-blue-800 transition-all duration-500'>
        <FiLogOut />
       Log Out
      </button>
    </form>
    
    <UpdateProfile uid={uid} userName={userName} />
       </div>
    </div> 
    </main>
  )
}

export default page
