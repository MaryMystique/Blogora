"use client"
import React, { useState } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../store/firebaseConfig';
import { LuLoaderCircle } from "react-icons/lu";


const PostBlog = ({session}) => {
    const [loading, setLoading] = useState(false)
    const initialValues = {
        blog: ""
    };
    const formValidation = Yup.object({
        blog: Yup.string().required("Share your blog").min(300, "Minimum of 500 characters required"),
    });

    const handleSubmit = async (values, {resetForm}) => {
       try {
          setLoading(true)
         // creat an object that would be sent to the db
         const reviewInfo = {
            author: session?.user?.name,
            img: session?.user?.image,
            timestamp: new Date().toLocaleDateString(),
            ...values
         }

         const docRef = await addDoc(collection(db, "blog"),reviewInfo)
          
         console.log("Document wriiten with ID: ", docRef.id);
         resetForm()

        //  console.log(reviewInfo);
        } catch (error) {
          console.error("Error adding data", error);
            alert("Oops, an error occurred")
        }
        finally{
         setLoading(false)
        }
    }
    return (
        <main className='min-h-dvh lg:p-6 p-3 space-y-10 bg-gray-50'>
            <div className='flex items-center justify-center flex-col gap-5'>
              <h1 className='md:text-3xl text-xl font-extrabold text-gray-900 uppercase'>Post your Blog Here</h1>
             <p className='text-gray-700 md:text-xl text-base'>Hey! What's up with you?? What's news? Care to share? Please sip the tea with us in the box below</p>
            </div>
          <section className='md:max-w-2xl w-full mx-auto shadow-md p-3 rouded-md'>
           <Formik initialValues={initialValues} validationSchema={formValidation} onSubmit={handleSubmit}>
            <Form className='space-y-5'>
                <div >
                    <label className='text-xm'>Post your blog</label>
                    <Field name="blog" as="textarea" className="w-full outline-none border border-gray-200 px-5 py-40 rounded-md bg-white"/>
                    <ErrorMessage name="blog"  component={"p"} className='text-xs text-red-500'/>
                </div>
                <div className='flex justify-end'>
                <button type='submit' className='bg-red-700 hover:bg-red-800 transition-colors duration-500 text-white text-xl rounded-md py-4 px-5'>
                   {
                     loading ? <LuLoaderCircle  className='animate-spin text-2xl text-center'/>
                     : "Share your Blog"
                   }
                </button>
                </div>
            </Form>
           </Formik>
          </section>
        </main>
    )
}
export default PostBlog