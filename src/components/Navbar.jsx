// Copyright 2023 ragad
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import React from 'react';

const ulList=`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
bg-gray-50 md:flex-row md:space-x-8
rtl:space-x-reverse md:mt-0 md:border-0
md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700`;

const navItem =`block py-2 px-3 text-white bg-blue-700
rounded md:bg-transparent md:text-blue-700
md:p-0 dark:text-white
md:dark:text-blue-500" aria-current="page`

export default function Navbar(){
    return (
    <nav className="bg-white border-gray-200 dark:bg-gray-700">
    <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
   
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className={ulList}>
        <li>
          <a href="#" className={navItem}>Home</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
)
}