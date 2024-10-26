import React from 'react'

import backgroundImage1 from '../assets/image5.jpg'
import image1 from '../assets/image6.jpg'

import picture3 from '../assets/download2.jfif'

const Contact = () => {
  return (
    <>
    <div className=' flex flex-col w-full h-screen bg-cover bg-no-repeat ' style={{backgroundImage : `url(${backgroundImage1})`}}>
     <div className='flex-auto  h-6 w-full text-start '>
     <h1 className="pt-6 text-white font-extrabold text-start font-serif text-4xl pl-2">Hepta</h1>
     </div>
     <div className='flex-auto flex-shrink  text-center items-center'>
      <h1 className='text-white font-extrabold text-5xl font-serif'>Contact Us.</h1>
     </div>
     </div>


     <div className='flex flex-row w-screen h-screen bg-slate-100'>
        <div className='flex flex-col sm:flex-row h-full w-1/2   items-center'>
          <div className='flex flex-auto bg-white rounded-lg shadow-lg  mr-24 ml-20'>
          
          <form action="" className='pt-10 pr-5 pl-5'>
          <div className='flex flex-auto justify-center pl-52'><h1 className='text-2xl font-serif font-bold pb-10'>Message Form</h1></div>
           <div className='flex flex-auto mb-3'> <label htmlFor="" className="text-lg">Name</label>
            <input type="text" placeholder='Name'  className=' pl-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            </div>
             <div className='flex flex-auto mb-3'><label htmlFor="" className='text-lg'>Phone</label>
           <input type="text" placeholder='Phone' className='pl-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
           </div>
           <div className='flex flex-auto mb-3'><label htmlFor="" className='text-lg'>Email</label>
           <input type="email" placeholder='Email' className=' pl-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
           </div>
            <div className='flex flex-auto mb-3'><label htmlFor="" className='text-lg'>Message</label>
           <textarea type="text" placeholder='Message' className='pl-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
           <div className='pl-52 mt-10 pb-8'>
           <button className='bg-gray-500 rounded-lg hover:text-2xl '>Send message</button>
           </div>
          </form>
          </div>
        </div>
        <div className='flex flex-auto flex-col w-1/2  items-start  justify-center '>
         <div className='w-96 h-60 bg-white rounded-lg pt-10 pl-6'>
          <h1 className='text-black text-2xl font-serif font-semibold'>Contact info</h1>
          <h3 className='text-black text-lg font-serif font-medium'>Email : myemail@myname.com</h3>
          <h3 className='text-black text-lg font-serif font-medium'>Cell : +923************</h3>
          <h3 className='text-black text-lg font-serif font-medium'>Mailbox : MymailboxAddress</h3>
          </div>
         </div>

    </div>
    <div className="flex flex-col sm:flex-row sm:space-x-10 flex-wrap w-screen h-auto pt-32 items-center justify-center bg-slate-100 ">
        <h1 className="flex flex-auto h-30 w-full font-sans text-6xl text-black justify-center">Happy Customers</h1>
        <div className="h-90 w-60 mb-36 mt-24 pt-4 pr-3 pl-3 pb-4 bg-white rounded-lg shadow-lg">
          <img src={picture3} alt="" className=" w-12 h-10 rounded-3xl"/>
          <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
           <h1 className="text-slate-400 font-semibold pt-6">Clare Gupta</h1>
        </div>
        <div className="h-90 w-60 mb-36 mt-24  pt-4 pr-3 pl-3 pb-4 bg-white rounded-lg shadow-lg">
          <img src={picture3} alt="" className=" w-12 h-10 rounded-3xl"/>
          <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
           <h1 className="text-slate-400 font-semibold pt-6">Clare Gupta</h1>
        </div>
        <div className="h-90 w-60 mb-36 mt-24  pt-4 pr-3 pl-3 pb-4 shadow-lg  bg-white rounded-lg">
          <img src={picture3} alt="" className=" w-12 h-10 rounded-3xl"/>
          <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
           <h1 className="text-slate-400 font-semibold pt-6">Clare Gupta</h1>
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

export default Contact