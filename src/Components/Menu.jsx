import React from 'react'
import Home from './Home'
import About from './About'
import Cantact from './Cantact'
import Hotels from './Hotels'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div className='flex flex-col flex-auto bg-slate-50  w-screen h-screen'>
        <div className='flex w-screen h-30 text-black  text-3xl items-end justify-end pt-8 pr-5'>
        </div>

        <div className='  flex-auto w-full h-full  text-center pt-10 text-2xl space-y-8'>
            <ul className='inline-block '> 
               <Link to = "/"><li className='mt-4 hover:text-slate-600'>Home</li></Link>
               <Link to = "/Hotels"><li className='mt-4 hover:text-slate-600'>Hotels</li></Link>
               <Link to ="/About"><li className='mt-4 hover:text-slate-600'>About Us</li></Link> 
               <Link to = "/Cantact"><li className='mt-4 hover:text-slate-600'>Contact</li></Link> 

            </ul>
        </div>

    </div>
  )
}

export default Menu