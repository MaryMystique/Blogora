"use client";
import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { LuLoaderCircle } from "react-icons/lu";
import { db } from "@/lib/firebaseconfig";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const PostBlog = ({session}) => {
  const [loading, setLoading] = useState(false);
   const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const initialValues = {
    category: "",
    blog: "",
  };
  const formValidation = Yup.object({
    category: Yup.string().required("Please select a category"),
    blog: Yup.string()
      .required("Share your blog")
      .min(500, "Minimum of 500 characters required"),
  });
  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      const blogInfo = {
        author: session?.user?.name,
        img: session?.user?.image,
        timestamp: new Date().toLocaleString(),
        ...values,
      };
      const docRef = await addDoc(collection(db, "blog"), blogInfo);
    //   console.log("Document written with ID: ", docRef.id);
      console.log(blogInfo);
      handleOpen()
      resetForm();
    } catch (error) {
      console.error("Error adding data", error);
      alert("Oops, an error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-dvh bg-stone-200">
      <div className="min-h-dvh w-full h-full">
        <div className="flex items-center justify-center flex-col gap-5 lg:p-6 p-3 space-y-10">
          <h1 className="md:text-3xl text-xl font-extrabold text-gray-900 uppercase">
            Post your Blog Here
          </h1>
          <p className="text-red-600 font-semibold mt-3 md:text-xl text-base">
            Hey! What's up with you?? What's news? Care to share? We just might feature you on our page...Please sip the
            tea with us in the box below
          </p>
        </div>
        <section className="md:max-w-2xl w-full mx-auto shadow-md p-3 rounded-md bg-white/70">
          <Formik
            initialValues={initialValues}
            validationSchema={formValidation}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-5">
              <div>
                <label className="text-base font-semibold">Category</label>
                <Field
                  name="category"
                  as="select"
                  className="w-full outline-none border border-gray-200 px-5 py-3 rounded-md bg-gray-50"
                >
                  <option value="" disabled>
                    -- Select a category --
                  </option>
                  <option value="Tech">Tech</option>
                  <option value="News">News</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Sports">Sports</option>
                  <option value="Politics">Politics</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Writing">Writing</option>
                  <option value="Finance">Finance</option>
                  <option value="Business">Business</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label className="text-base font-semibold">
                  Post your blog
                </label>
                <Field
                  name="blog"
                  as="textarea"
                  className="w-full outline-none border border-gray-200 px-5 py-3 h-60 rounded-md bg-white"
                />
                <ErrorMessage
                  name="blog"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>
              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-800 transition-colors duration-500 text-white text-xl rounded-md py-4 px-5 flex items-center gap-2"
                >
                  {loading ? (
                    <LuLoaderCircle className="animate-spin text-2xl" />
                  ) : (
                    "Share your Blog"
                  )}
                </button>
              </div>
            </Form>
          </Formik>
        </section>
      </div>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Post successfull
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your Blog has been posted successfully.
          </Typography>
        </Box>
      </Modal>
    </main>
  );
};
export default PostBlog;






