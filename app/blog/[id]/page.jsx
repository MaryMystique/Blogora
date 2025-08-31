import React from 'react'
import { getDoc, doc } from "firebase/firestore";
import { db } from '@/lib/firebaseconfig';


const perBlog = async (id) => {
  if (!id) return null;

  try {
    const docRef = doc(db, "blog", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return{ id, ...docSnap.data() };
    } else {
      // docSnap.data() will be undefined in this case
      console.log("Document doesn't exist!");
      
    }
  } catch (error) {
    console.error("An error occured", error);
    alert("Oops, something went wrong");
  }
};

const page = async ({ params }) => {
  const oneBlog = await perBlog(params.id);
  // return <p>ID: {params.id}</p>;
  return (
    <main>
      <section>
        <div className="bg-white shadow-md rounded-md p-6">
          <h1 className="mb-4 px-3 py-1 text-gray-800 text-2xl font-bold">
            {oneBlog.category}
          </h1>
          <h1 className="text-xl font-light text-gray-800 mb-2">
            {oneBlog.blog}
          </h1>
          <p className="text-sm text-gray-500 mb-1">By {oneBlog.author}</p>
          <p className="text-xs text-gray-400 mb-6">
            Shared on {oneBlog.timestamp}
          </p>
          <p className="text-gray-700 leading-7 whitespace-pre-line">
            {oneBlog.body}
          </p>
        </div>
      </section>
    </main>
  )
}

export default page
