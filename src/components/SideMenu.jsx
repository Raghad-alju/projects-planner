
import React from 'react';

import { Sidebar } from 'flowbite-react';
export default function SideMenu({ handleVisibility, visibility }) {
   const itemStyle = `= w-full text-left flex items-center p-2 text-black-900 rounded-lg hover:text-white dark:hover:bg-gray-700 `
   const itemIconStyle = `flex-shrink-0 w-5 h-5 text-dark-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" `
   return (
      // <Sidebar id="default-sidebar" className="fixed lg:top-0 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      //    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-blue-200">

      //       <ul className="space-y-2 font-medium">
      //          <li>
      //             <button onClick={handleVisibility} disabled={!visibility.addProj} className={itemStyle}>
      //                <img className={itemIconStyle} src="https://www.svgrepo.com/show/532030/circle-heat.svg" />
      //                <span className="flex-1 ms-3 whitespace-nowrap">Add Project</span>
      //             </button>
      //          </li>
      //          <li>
      //             <button onClick={handleVisibility} disabled={!visibility.} className={itemStyle}>
      //                <img className={itemIconStyle} src="https://www.svgrepo.com/show/532030/circle-heat.svg" />
      //                <span className="flex-1 ms-3 whitespace-nowrap">Project list</span>
      //             </button>
      //          </li>

            


      //       </ul>
      //    </div>
      // </Sidebar>
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 justify-center">
    <li class="me-2">
        <button  aria-current="page" class={`inline-block p-4 hover:text-gray-600 hover:bg-gray-100  rounded-t-lg ${!visibility.showProj? 'bg-gray-100':''}`} onClick={handleVisibility} disabled={!visibility.showProj}>Project List</button>
    </li>
    <li class="me-2">
    <button  aria-current="page" class={`inline-block p-4 hover:text-gray-600 hover:bg-gray-100  rounded-t-lg ${!visibility.addProj? 'bg-gray-100':''}`} onClick={handleVisibility} disabled={!visibility.addProj}>Add Project</button>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Settings</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Contacts</a>
    </li>
    <li>
        <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
    </li>
</ul>
)
}

