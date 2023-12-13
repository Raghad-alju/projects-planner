
import React from 'react';
import logo from './../icons/pngtree-orange-logo-abstract-vector-designs-png-image_2132671.jpg'
const ulList=`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
bg-gray-50 md:flex-row md:space-x-8
rtl:space-x-reverse md:mt-0 md:border-0
md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700`;



export default function Navbar(){
    return (
    <nav className="bg-white border-gray-200 ">
    <div className=" flex flex-wrap items-center justify-between mx-auto ml-4 p-4">
    <a href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap font-Kalam">My Planner</span>
    </a>
   
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className={ulList}>
       
        
      </ul>
    </div>
  </div>
</nav>
)
}