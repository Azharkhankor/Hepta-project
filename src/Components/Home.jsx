import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faPersonHiking } from "@fortawesome/free-solid-svg-icons/faPersonHiking";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faParachuteBox } from "@fortawesome/free-solid-svg-icons";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import picture from '../assets/image6.jpg'
import { Link } from "react-router-dom";
import picture2 from '../assets/download.jfif'
import picture3 from '../assets/download2.jfif'
import picture4 from '../assets/image4.jpg'
import picture5 from '../assets/image5.jpg'

function Home() {


  return (
    <>
    <div className="flex flex-col  flex-shrink w-fit h-screen bg-[url('.\assets\image1.jpg')] bg-no-repeat bg-cover " >
       <div className="flex flex-row h-8 w-full ">
      <div className="h-full w-1/2"><h1 className="pt-6 text-white font-extrabold text-start font-serif text-4xl pl-2">Hepta</h1></div>
       <div className="h-full w-1/2 text-end">    <Link to ="/Menu"> <FontAwesomeIcon icon={faBars} size="2x" className=" text-white pt-6 pr-3 hover:text-4xl" /></Link></div>
      </div>
      
        <div className="flex flex-col flex-auto justify-center w-screen  h-full items-center text-white ">
          <div><h1 className="font-extrabold text-5xl">Travel and Tours.</h1></div>
          <div><h2 className="text-white text-xl pt-3">A free template by colorlib. Download and share!</h2></div>
        <a className="bg-transparent border-2 border-double hover:text-xl  text-white mt-6 px-2 py-2  border-white rounded-lg" href="https://colorlib.com/">Visit colorlib</a>
       </div>
       
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center  bg-slate-100 w-full">
  
  <div className="flex w-full md:w-1/2 h-1/2 md:h-full items-center justify-center p-6">
    <img 
      src={picture} 
      alt="Image of a beautiful scenery" 
      className="w-5/6 mt-16 h-auto max-h-full pl-4 object-cover md:pl-10 rounded-sm shadow-md"
    />
  </div>

  
  <div className="flex w-full md:w-1/2 items-start justify-center p-6 md:pl-10">
    <div className="text-left bg-white w-4/5 h-4/6 pl-6 pb-8 rounded-xl">
      <h1 className="mt-4 md:mt-16 text-3xl font-serif font-bold">Lorem Ipsum</h1>
      
      <p className="pt-6">In publishing and graphic design, Lorem ipsum is a placeholder</p>
      <p className="pt-4">Text commonly used to demonstrate the visual form of a document</p>
      <p className="pt-4">Or a typeface without relying on meaningful content.</p>
      <p className="pt-4">Lorem ipsum may be used as a placeholder before the final copy is available.</p> 
    </div>
  </div>
</div>

   
<div className="flex flex-col items-center bg-slate-100 w-full pt-36 p-4 md:p-8">

  <div className="text-center max-w-2xl pt-8">
    <h1 className="font-serif text-2xl md:text-3xl font-bold">
      Experience Once In Your Lifetime
    </h1>
    <p className="mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
  </div>

  
  <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-6 pt-12 w-full max-w-4xl">
    
    <div className="flex flex-col h-60 w-80 bg-white shadow-lg p-4 rounded-lg">
    <FontAwesomeIcon icon=  { faUtensils } className="text-5xl"/>
      <h2 className="font-bold text-lg">Good Foods</h2>
      <p className="mt-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>

    
    <div className="flex flex-col h-60 w-80 bg-white shadow-lg p-4 rounded-lg">
    <FontAwesomeIcon icon={faPersonHiking} className="text-5xl" />
      <h2 className="font-bold text-lg">Hiking</h2>
      <p className="mt-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>

    
    <div className="flex flex-col h-60 w-80 bg-white shadow-lg p-4 rounded-lg">
    <FontAwesomeIcon icon={ faHotel } className="text-5xl" />
      <h2 className="font-bold text-lg">Luxury Resort</h2>
      <p className="mt-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>

    
    <div className="flex flex-col h-60 w-80 bg-white shadow-lg p-4 rounded-lg">
    <FontAwesomeIcon icon= { faPlane } className="text-5xl" />
      <h2 className="font-bold text-lg">Airplane</h2>
      <p className="mt-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>

  
    <div className="flex flex-col h-60 w-80 bg-white shadow-lg p-4 rounded-lg">
    <FontAwesomeIcon icon={ faParachuteBox } className="text-5xl" />
      <h2 className="font-bold text-lg">Hot Air Baloon</h2>
      <p className="mt-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>

    
    <div className="flex flex-col h-60 w-80 bg-white shadow-lg p-4 rounded-lg">
    <FontAwesomeIcon icon={ faMountain } className="text-5xl" />
      <h2 className="font-bold text-lg">Sight Seeing</h2>
      <p className="mt-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>
  </div>
</div>

      <div className="flex flex-col w-screen  flex-auto  bg-slate-100 pt-32 justify-center items-center">
        <div className="flex-auto bg-white mb-8 rounded-xl h-60 w-3/5 pt-12 pl-40 ">
         <h1 className="font-serif text-5xl text-start pb-4"> Recent Blog Posts</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo</p>
         <p>odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores</p>
         <p>quis, blanditiis laboriosam alias. Sed.</p>
        </div>
      <div className=" flex flex-col sm:flex-row sm:space-x-6 flex-auto  pt-24 items-center justify-center  mb-12">
        <div className="h-96 w-80 shadow-lg rounded-lg bg-white ">
          <img src={picture2} alt=""  className="h-60 w-full"/>
          <h1 className="text-gray-300 font-sans pl-2">FEBRUARY 26,2024</h1>
          <a href="#"><h1 className="font-sans pl-2 text-xl">Best places to unwind</h1></a>
          <p className="font-sans pl-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>

        <div className="h-96 w-80 shadow-lg rounded-lg bg-white">
          <img src={picture4} alt=""  className="h-60 w-full"/>
          <h1 className="text-gray-300 font-sans pl-2">FEBRUARY 26,2024</h1>
          <a href="#"><h1 className="font-sans pl-2 text-xl">Best places to unwind</h1></a>
          <p className="font-sans pl-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>

        <div className="h-96  w-80 shadow-lg rounded-lg bg-white">
          <img src={picture5} alt=""  className="h-60 w-full"/>
          <h1 className="text-gray-300 font-sans pl-2">FEBRUARY 26,2024</h1>
          <a href="#"><h1 className="font-sans pl-2 text-xl">Best places to unwind</h1></a>
          <p className="font-sans pl-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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

export default Home
