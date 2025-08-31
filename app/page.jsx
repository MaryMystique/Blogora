import Image from "next/image";

export default function Home() {
  return (
    <main className="px-10 py-10">
      <section className="min-h-dvh">
        <div className="flex items-center justify-center space-y-10"> 
          <h1 className="text-4xl md:text-5xl">
           Welcome to <span className="text-red-500 italic">Blogora</span>
          </h1>
          </div>
          <div className="text-center mt-10">
          <h1 className="text-2xl md:text-3xl">
           Explore Ideas. Share Stores.  Spark Conversations.
          </h1>
        </div>

        <div className="flex items-center justify-center mt-10">
        <div className="">
          <img src="/gg2.jpg" alt="wg" className="w-full object-cover" />
        </div>
        </div>
        <p className="mt-10 font-light text-xl">
        "If your're struggling today, remember that life is worth livig and believe that the best is yet to come. Remember that you are loved, you matter, and never forget that there is always hope."...by Fab girls! 
        </p>
      </section>
      
      <h1 className="mt-9 text-center bg-red-400 text-white font-extrabold text-3xl md:4xl"> Latest Updates</h1>

      {/* blog grid */}
      <section className="min-h-dvh mt-15">
        <div className="grid md:grid-cols-3 gap-7">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/phyna.jpg" alt="pyhna" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">News</span>
          <h2 className="text-lg font-semibold mt-3">
           BREAKING: Family Of BBNaija's Phyna Announces Passing Of Sister Ruth Otabor After the Accident with Dangote's truck... 
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 31, 2025 by Tunde Edunt</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/tacha.jpg" alt="Tacha" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Celebrity Tea</span>
          <h2 className="text-lg font-semibold mt-3">
           "Every girl needs three other boyfriends...I'm not saying to sleep wiyh all the boyfriends. But atleast...You just never really know." says BBNaija Tacha
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 30, 2025 by Christabel Ndoeche</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/fuel.jpg" alt="fuel" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Writing</span>
          <h2 className="text-lg font-semibold mt-3">
            5% Fuel Surcharge: Weaning Nigeria off Oil addiction
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 29, 2025 by Daniel Oladoja</p>
        </div>
        </div>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/cd1.jpg" alt="Celebrity Tea" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Celebrity Tea</span>
          <h2 className="text-lg font-semibold mt-3">
            Over the weekend, Davido and Chioma Rowland finally tied the knot in grand style in Miami and was graced exclusively by family and friends. But the highlight of the wedding is the $950,000 (N1.5 billion) wedding ring on Chioma's ring finger and the a Richard Mille wristwatch valued at approximately $300,000 and other luxurious souvenir packages given to the guests. 
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 24, 2025 by Tunde Edunt</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/tr.jpg" alt="Travel" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Travel</span>
          <h2 className="text-lg font-semibold mt-3">
            It is time to plan the holiday you've been waiting for all year, checkout Wakanow.com official website for holiday packages. It's time to enjoy summer solo or with family and unwind.
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 21, 2025 by Noela Ifeoma</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/fp.jpg" alt="Finance" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Finance</span>
          <h2 className="text-lg font-semibold mt-3">
            World business submit was held during the weekend in Dubia where the top business owners and government deligates from Nigeria were all in attendance.
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 24, 2025 by Jane Doe</p>
        </div>
        </div>
        </div>
      </section>
       <div className="mt-15">
        <div className="grid md:grid-cols-3 gap-7">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/bra.jpg" alt="Business" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Culture</span>
          <h2 className="text-lg font-semibold mt-3">
            Brazil is set to host the Brazil Carnival 2025 in Sept 10 2025, and has officially started tickets for the event. There are speculation that this year's Carnival is going to be wild and African  
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 22, 2025 by Loritha Efe</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/air.jpg" alt="News" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">News</span>
          <h2 className="text-lg font-semibold mt-3">
            Plane Crash Disater: Air India enroute to UK crashes with 200 people onboard inclusive the cabin crew with just one survivor. A sad day indeed...
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 21, 2025 by Anderson Obi</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/ti.jpg" alt="tech" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Tech</span>
          <h2 className="text-lg font-semibold mt-3">
            TechCrunch provides the best tech coverage around and even has a daily tech report video every day called The Crunch Report.
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 23, 2025 by Katy Ander</p>
        </div>
        </div>
        </div>
      </div>
       <div className="mt-15">
        <div className="grid md:grid-cols-3 gap-7">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/kor.jpg" alt="food blog" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Food blog</span>
          <h2 className="text-lg font-semibold mt-3">
           Satiate.ng has just added korean dishes to their menu and they are offering 30% discount on dinner dates this weekend. Do well to visit their Official website to book a reservation with them. 
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 19, 2025 by Purity Nze</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/pil.jpg" alt="Lifestyle" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Lifestyle</span>
          <h2 className="text-lg font-semibold mt-3">
            Abuja Socialite launches her second Pilates studio @ Motionstudios_ng and is offering 50% discount.This is the best Pilate studio in town with good instructors standby. Pls check them out... 
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 21, 2025 by Oluchi Jane</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/arts.jpg" alt="arts" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Arts</span>
          <h2 className="text-lg font-semibold mt-3">
            A historic sale of potrait of the Dalai Lama by Krishna Kanwal, along with Sir Basil Goul's archive, broke records at a recent event in New York.
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 23, 2025 by Katy Ander</p>
        </div>
        </div>
        </div>
      </div>
       <div className="mt-15">
        <div className="grid md:grid-cols-3 gap-7">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/fv.jpg" alt="Sports" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Sports</span>
          <h2 className="text-lg font-semibold mt-3">
            Barcelona gem could help Flick fill a gap in the squad after impressing at U20 international Cup... 
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 17, 2025 by Chinny Eze</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/bp.jpg" alt="Travel" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Business World</span>
          <h2 className="text-lg font-semibold mt-3">
            World business submit was held during the weekend in Dubia where the top business owners and government deligates from Nigeria were all in attendance.
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 18, 2025 by Anderson Obi</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/tru.jpg" alt="politics" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Politics</span>
          <h2 className="text-lg font-semibold mt-3">
            Trump administration latest: Kilmar Abrego Garcia detained and possible National Guard deployment in Chicago...
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 16, 2025 by Katy Ander</p>
        </div>
        </div>
        </div>
      </div>
       <div className="mt-15">
        <div className="grid md:grid-cols-3 gap-7">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/dec.jpg" alt="Interiors" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Interior Design</span>
          <h2 className="text-lg font-semibold mt-3">
            Micmadan_Interiors: We bring you carefully-curated interior design ideas, to give your home a brand new look. Explore exclusive interior designs and trends that are every bit... 
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 14, 2025 by Chinny Eze</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/vaca.jpg" alt="Travel" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Travel</span>
          <h2 className="text-lg font-semibold mt-3">
           How To Travel The World: Explore. Dream. Discover. This is a world travel blog about beautiful destinations, with free tips & guides on how to travel the world!
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 13, 2025 by Anderson Obi</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/holl.jpg" alt="hollywood" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Entertain</span>
          <h2 className="text-lg font-semibold mt-3">
            2025 Met Gala: Ashley Graham Reveals Last Minute Met Gala Wardrobe Malfunction. Paige DeSorbo Ditched spray Tans for This Self-Tanner & It's on Sale.... 
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 12, 2025 by Katy Ander</p>
        </div>
        </div>
        </div>
      </div>
      <div className="mt-15">
        <div className="grid md:grid-cols-3 gap-7">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/fire.jpg" alt="fire" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">News</span>
          <h2 className="text-lg font-semibold mt-3">
           LASTMA averts disaster as tanker fire engults trucks in Iyana-Isolo...
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 11, 2025 by Chinny Eze</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/nj.jpg" alt="sports" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Sports</span>
          <h2 className="text-lg font-semibold mt-3">
           Nicolas Jackson transfer news: Chelsea open to selling striker to Bayern Munich amid talks with...
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 10, 2025 by Anderson Obi</p>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <img src="/inec.jpg" alt="inec" className="w-full h-50 object-cover" />
        <div className="p-5">
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Politics</span>
          <h2 className="text-lg font-semibold mt-3">
            Rivers State local government election results: Wike delivers 20 LGAs to APC out of 23 local government areas in the state while PDP secures just three...
          </h2>
          <p className="text-sm text-gray-600 mt-2">Aug 09, 2025 by Katy Ander</p>
        </div>
        </div>
        </div>
      </div>
    </main>
  );
}
