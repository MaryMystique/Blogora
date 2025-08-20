import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik';

const page = () => {
  const initialValues = {
        name: "",
        Email:"",
        Message:""
    };
  return (
    <main>
        <section className='min-h-dvh'>
            <div className='px-10 py-8'>
            <h1 className='text-3xl font-bold text-center'>Contact Us</h1>

           <div className='flex px-30 items-center flex-cols2 gap-10'>
            <div>
            <p className='py-8'>We'd love to hear from you! Whether you have questions, feedback or want to collaborate with us - feel free to reach out.</p>
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

            <div className='flex justify-end px-5 mt-10'>
            <div className='outline-none border border-gray-200 px-15 py-35 md:max-w-2xl w-full mx-auto shadow-md p-3 rouded-md '>
              <p className='text-center md:text-3xl text-xl font-extrabold text-gray-900'>Send us a Feedback</p>
              
            <div>
             <label className='text-xm'>Your Name</label>
             <Field name="name" as="textarea" className="w-full outline-none border border-gray-200 px-5 py-35 rounded-md bg-white"/>
           </div>
              
            </div>
            </div>

           </div>
            </div>
        </section>
    </main>
  )
}

export default page