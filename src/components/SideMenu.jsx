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

import { Sidebar } from 'flowbite-react';
export default function SideMenu({handleVisibility,visibility}){
    const itemStyle=`= w-full text-left flex items-center p-2 text-black-900 rounded-lg hover:text-white dark:hover:bg-gray-700 `
    const itemIconStyle=`flex-shrink-0 w-5 h-5 text-dark-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" `
return(
<Sidebar  id="default-sidebar" className="fixed lg:top-0 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-blue-200">
  
      <ul className="space-y-2 font-medium">
      <li>
            <button onClick={handleVisibility} disabled={!visibility.addProj} className={itemStyle}>
               <img className={itemIconStyle} src="https://www.svgrepo.com/show/532030/circle-heat.svg" />
               <span className="flex-1 ms-3 whitespace-nowrap">Add Project</span>
            </button>
</li>
      <li>
            <button onClick={handleVisibility} disabled={!visibility.showProj} className={itemStyle}>
               <img className={itemIconStyle} src="https://www.svgrepo.com/show/532030/circle-heat.svg" />
               <span className="flex-1 ms-3 whitespace-nowrap">Project list</span>
            </button>
</li>
      
 <Sidebar.Collapse
            
            label="E-commerce">
      
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>


      </ul>
   </div>
</Sidebar>)
}

