import React from 'react'

const page = () => {
  return (
    <main className='min-h-dvh bg-blue-400 space-y-10'>
      <div className='flex items-center justify-center gap-2'>
        <h1 className="text-4xl md:text-5xl text-black mt-10 ">
           Welcome to <span className="text-red-500 italic">Blogora</span>
          </h1>
          </div>
          <div className='px-10'>
           <h1 className="text-2xl mt-7 md:text-3xl text-center">
           Explore Ideas. Share Stores. Spark Conversations.
          </h1>
          <p className="text-gray-900 mt-7 text-lg">{" "}
           Blogora is a modern blogging platform that brings writers and
           readers together. From discovering fresh perspectives, deep
           insights, and everyday inspiration. Whether you're here to read,
           write, or connect, Blogora is where authentic voices spark
           conversations across categories like:Tech, Entertainment, Sports, Business, Finance, Culture, Arts, Wellness, Politics and more...
          </p>
      
          </div>
    </main>
  )
}

export default page
