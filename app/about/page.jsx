import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main className='min-h-dvh bg-gray-50 text-gray-800'>
      {/* hero section */}
      <section className='max-w-5xl mx-auto py-15 px-5 text-center'>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">About <span className='text-indigo-600'>Blogora</span></h1>
        <p className='text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>Blogora is your digital hub for creativity, stories, and insight - where ideas meet clarity and every writer finds a voice. Our platform was built to connect people through words, ideas, and meaningful expression.</p>
          </section>
          {/* mission section */}
          <section className='bg-white border-y border-gray-200 py-15 px-5'>
            <div className='max-w-5xl mx-auto text-center space-y-6'>    
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>Our Mission</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
             To empower writers, thinkers, and readers by providing a simple and beautiful space to share, discover, and grow through stories that inspire and inform. Blogora is designed for those who believe that knowledge, creativity, and authentic perspectives deserve to be seen.
          </p>
            </div>
           </section>
           {/* platform features */}
           <section className='max-w-6xl mx-auto py-15 px-5'>
            <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-10'>Why Blogora?</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
              <div className='bg-white p-5 rounded-lg shadow hover:shadow-lg transition'>
                <h3 className='text-xl font-semibold text-indigo-600 mb-3'>Simplicity & Focus</h3>
                <p className='text-gray-600 leading-relaxed'>We've stripped away distractions so you can focus on what matters: writing and reading stories that resonate. Blogora keeps things  clean, minimal, and user-focused.</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow hover:shadow-lg transition'>
                <h3 className='text-xl font-semibold text-indigo-600 mb-3'>Real-Time Updates</h3>
                <p className='text-gray-600 leading-relaxed'>Blogs update instantly, ensuring readers always stay connected to the latest ideas, opinions, and conversations in real time.</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow hover:shadow-lg transition'>
                <h3 className='text-xl font-semibold text-indigo-600 mb-3'>Community of Voices</h3>
                <p className='text-gray-600 leading-relaxed'>From thought leaders to everyday storytellers, Blogora celebrates diverse voices and authentic human experiences - all in one place.</p>
              </div>
            </div>
           </section>
           {/* Closing section */}
           <section className='bg-indigo-50 text-center py-20 px-5'>
            <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Join the Blogora Community</h2>
            <p className='text-lg text-gray-700 mb-8 leading-relaxed'>Blogora is a movement towards better digital storytelling - open, inclusive, and inspiring. Whether you're sharing personal stories, professional insights, or creative ideas, Blogora gives your words a home that feels timeless. </p>
            <Link 
            href="/post-blog" className='inline-block bg-indigo-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-indigo-800 transition'>
            Start Writing
            </Link> 
            </div>
           </section>
    </main>
  )
}

export default page
