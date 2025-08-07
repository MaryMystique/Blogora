import React from 'react'

const page = () => {
  return (
    <main>
        <section className='min-h-dvh'>
            <div className='px-10 py-8'>
            <h1 className='text-3xl font-bold text-center'>Contact Us</h1>

            <p className='py-8'>We'd love to hear from you! Whether you have questions, feedback or want to collaborate with us - fee free to reach out.</p>

            <p>Email us at: <a href='mailto:hello@blogora.com' className='text-blue-500 underline'>hello@blogora.com</a></p>

            <p className='py-5'>Or Connect with us on social media:
                <ul className='list-disc list-inside mt-3'>
                    <li><a href='#' className='text-blue-500 hover:underline'>Facebook</a></li>
                    <li><a href='#' className='text-blue-500 hover:underline'>Instagram</a></li>
                    <li><a href='#' className='text-blue-500 hover:underline'>Twitter</a></li>
                </ul>
            </p>
            <p className='text-gray-600 mt-5'>We usually respond within 24-48hours.</p>
            </div>
        </section>
    </main>
  )
}

export default page