
import React from 'react';


export default function SideMenu({ handleVisibility, visibility }) {
 
   return (
   
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 font-comicNeue  justify-center">
    <li class="me-2">
        <button  aria-current="page" class={`  inline-block p-4 hover:text-white hover:bg-orange-400   rounded-t-lg ${!visibility.showProj? 'bg-orange-400 text-white':''}`} onClick={handleVisibility} disabled={!visibility.showProj}>
        <svg className="float-left w-5 h-5 mr-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01"/>
  </svg>
        Project List</button>
    </li>
    <li class="me-2">
    <button  aria-current="page" class={` inline-block p-4 hover:text-white hover:bg-orange-400  rounded-t-lg ${!visibility.addProj? 'bg-orange-400 text-white':''}`} onClick={handleVisibility} disabled={!visibility.addProj}>
    <svg className="float-left w-5 h-5 mr-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
    <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
  </svg>
    Add Project</button>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-lg text-gray-600 bg-gray-100   cursor-not-allowed">Settings</a>
    </li>
  
</ul>
)
}

