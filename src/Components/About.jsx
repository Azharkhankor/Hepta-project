import React from 'react'
import Image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image9 from '../assets/image9.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import { useState } from 'react'



const About = () => {
   const images =[image5 , image6 , image7 , image8];

   const [currentIndex, setCurrentIndex] = useState(0);

   const handlePrevious = () => {
     setCurrentIndex((prevIndex) =>
       prevIndex === 0 ? images.length - 1 : prevIndex - 1
     );
   };
 
   const handleNext = () => {
     setCurrentIndex((prevIndex) =>
       prevIndex === images.length - 1 ? 0 : prevIndex + 1
     );
   };
  return (
   <>
   <div className=' flex flex-col w-full h-screen bg-cover bg-no-repeat ' style={{backgroundImage : `url(${Image3})`}}>
     <div className='flex-auto  h-6 w-full text-start '>
     <h1 className="pt-6 text-white font-extrabold text-start font-serif text-4xl pl-2">Hepta</h1>
     </div>
     <div className='flex-auto flex-shrink  text-center items-center'>
      <h1 className='text-white font-extrabold text-5xl font-serif'>About Us.</h1>
     </div>
     </div>
      <div className='flex flex-row w-screen h-screen'> 
        <div className='flex flex-auto h-full w-1/2  justify-center items-center'>
           <img src={image4} alt="" className=' w-2/3  pl-20'/>
        </div>
        <div className='flex flex-auto flex-col w-1/2  items-start  justify-center '>
          <h1 className='text-black font-serif font-extrabold text-3xl'>Welcome Travel & Tours</h1>
          <p>Far far away, behind the word mountains, far from the</p>
          <p >countries Vokalia and Consonantia, there live the blind</p>
          <p>texts. Separated they live in Bookmarksgrove right a</p>
          <p>the coast of the Semantics, a large language ocean.</p>
        </div>
   </div>
    <div className='flex flex-auto  flex-col h-screen w-screen justify-center items-center'>
      <div className='h-44 w-1/3 bg-white shadow-lg rounded-lg pl-4 pr-3'>
        <h1 className='text-xl font-sans font-bold pr-4 pt-6'> Hotel Gallery</h1>
        <p className='font-serif font-medium'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      </div>
      <div className="relative  mx-auto  w-3/5 h-3/5 pt-8 pb-3">
      
      <div className="overflow-none rounded-lg  w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className=" transition-transform duration-500 w-full h-full object-cover shadow-lg rounded-lg"
        />
      </div>

      
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
      >
        &#8249;
      </button>

      
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
      >
        &#8250;
      </button>
    </div>
    </div>



   <div className='flex flex-col flex-auto w-screen h-screen items-center pt-10'>
    <div className=' h-40 w-1/3 bg-white rounded-lg shadow-lg pl-3 mb-16'>
      <h1 className='font-serif font-bold text-xl'>Team</h1>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
    <div className='flex flex-col sm:flex-row w-2/3 space-x-8 justify-center pb-12'>
      <div className='shadow-lg rounded-lg'>
        <img src={image9} alt="" className='w-72 h-96'/>
        <h3>CEO ,CO-founder </h3>
        <h1>Vince Richardson</h1>
      </div>
      <div className='shadow-lg rounded-lg'>
        <img src={image9} alt="" className='h-96 ' />
        <h3>CEO ,CO-founder </h3>
        <h1>Vince Richardson</h1>
      </div>
      <div className='shadow-lg rounded-lg'>
        <img src={image9} alt="" className='h-96' />
        <h3>CEO ,CO-founder </h3>
        <h1>Vince Richardson</h1>
      </div>
    </div>
   </div>

   
   <footer className="bg-black text-white w-full">
  <div className="flex justify-between items-start max-w-7xl mx-auto p-10 space-x-10">
    
    
    <div>
      <h1 className="text-xl font-serif mb-4">Quick Links</h1>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-300">About Us</a></li>
        <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
        <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-gray-300">Help</a></li>
      </ul>
    </div>
    
  
    <div>
      <h1 className="text-xl font-serif mb-4">Support</h1>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-300">Our Location</a></li>
        <li><a href="#" className="hover:text-gray-300">Hosts</a></li>
        <li><a href="#" className="hover:text-gray-300">Contacts</a></li>
        <li><a href="#" className="hover:text-gray-300">Help</a></li>
      </ul>
    </div>

    
    <div>
      <h1 className="text-xl font-serif mb-4">Contact Info</h1>
      <ul className="space-y-2">
        <li>
          <strong>Address:</strong> 
          <p>98 West 21st Street, Suite 721, New York, NY 10016</p>
        </li>
        <li>
          <strong>Phone:</strong> 
          <p>(+1) 435 3533</p>
        </li>
        <li>
          <strong>Email:</strong> 
          <p>info@yourdomain.com</p>
        </li>
      </ul>
    </div>

    
    <div className="w-full sm:w-auto">
      <h1 className="text-lg mb-4">Subscribe</h1>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black border border-white transition-all">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  <div className="bg-gray-900 text-center py-4">
    <p className="text-sm text-gray-400">© 2024 MyWebsite. All rights reserved.</p>
  </div>
</footer>
   </>
  )
}

export default About