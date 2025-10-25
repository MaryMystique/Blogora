import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main className='min-h-dvh bg-gray-50 text-gray-800'>
      {/* hero section */}
      <section className='bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-16 px-6 text-center'>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Blogora</h1>
        <p className='max-w-2xl mx-auto text-lg text-indigo-100'>A creative space where thoughts, stories, and ideas come alive.</p>
          </section>
          {/* about section */}
          <section className='max-w-5xl mx-auto py-15 px-5'>
          <h2 className='text-2xl font-bold mb-4'>Who We Are</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            <span className='font-semibold text-indigo-600'>Blogora</span> is a digital hub for writers, thinkers, and readers. We provide a platform for anyone with a story to share - whether it's tech insights, lifestyle tips, creative ideas, or trending news. Our goal is to build a community of authentic voices that inspire and inform people across the globe.
          </p>
          <p className='text-gray-600 leading-relaxed'>
            We believe every story matters. From passionate bloggers to curious readers, Blogora connects minds through meaningful content that sparks creativity and conversation.
          </p>
           </section>
           {/* mission & vision */}
           <section className='bg-white border-t border-gray-200 py-15 px-5'>
            <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-12'>
              <div>
                <h3 className='text-xl font-semibold text-indigo-600 mb-3'>Our Mission</h3>
                <p className='text-gray-600 leading-relaxed'>To empower writers and readers by creating an open and inclusive blogging platform that celebrates knowledge sharing, storytelling, and personal growth.</p>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-indigo-600 mb-3'>Our Vision</h3>
                <p className='text-gray-600 leading-relaxed'>To become a global community where ideas flow freely, creativity thrives, and everyone's voice finds a place to be heard.</p>
              </div>
            </div>
           </section>
           {/* team section */}
           <section className='max-w-5xl mx-auto py-15 px-5 text-center '>
            <h2 className='text-2xl font-bold mb-8'>Meet the Team</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'> {[1, 2].map((i) => (
              <div key={i} className='bg-white shadow-sm rounded-xl p-5 border border-gray-100'>
               <img src={`/Oo.jpg`} alt='Team member' className='w-30 h-30 mx-auto rounded-full object-cover mb-4'/>
               <h4 className='font-semibold text-gray-800'>Team Member {i}</h4>
               <p className='text-sm text-gray-500'>Developer</p>
              </div>
              ))}   
            </div>
           </section>
           {/* CTA section */}
           <section className='bg-indigo-600 text-white text-center py-14 px-5'>
            <h3 className='text-2xl font-semibold mb-4'>Join the Blogora Community</h3>
            <p className='text-indigo-100 mb-6'>Whether you love writing, reading, just discovering new ideas - Blogora is your home.</p>
            <Link 
            href="/" className='bg-white text-indigo-600 font-medium px-5 py-3 rounded-md hover:bg-red-300 transition'>
            Start Reading
            </Link> 
           </section>
    </main>
  )
}

export default page
