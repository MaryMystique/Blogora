"use client";
import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
const Page = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().min(10, "Message too short").required("Message is required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    resetForm();
    alert("Thank you for your feedback!");
  };
  return (
    <main>
      <section className="min-h-dvh bg-[url('/cp.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="flex items-center justify-center">
        <div className="px-6 py-10 max-w-6xl w-full">
          <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Text */}
           
            <div className="text-white font-semibold">
              <p className="mb-5">
                We'd love to hear from you! Whether you have questions, feedback,
                or want to collaborate with us – feel free to reach out.
              </p>
              <p>
                Email us at:{" "}
                <a
                  href="mailto:hello@blogora.com"
                  className="text-blue-500 underline"
                >
                  hello@blogora.com
                </a>
              </p>
              <div className="mt-5">
                <p>Or connect with us on social media:</p>
                <ul className="list-disc list-inside mt-3">
                  <li>
                    <a href="#" className="text-blue-500 hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-500 hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-500 hover:underline">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <p className="text-gray-900 mt-5">
                We usually respond within 24–48 hours.
              </p>
            </div>
            {/* Form */}
            <div className="shadow-md bg-white rounded-xl p-6">
              <p className="text-center text-xl md:text-2xl font-extrabold text-gray-900 mb-6">
                Send us a Feedback
              </p>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Field
                      name="name"
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      rows="4"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
         </div>
      </section>
    </main>
  );
};
export default Page;
