
import React, { useState } from 'react';
import {useRef} from 'react';
import {forwardRef} from 'react';
import AddProject from './AddProject';

const ProjectDetail = forwardRef( function ProjectDetail({pId, projectList,deleteProject,forceUpdate},ref){
    var currentProject=projectList.find(p => p.id === pId);
    if(currentProject==null){
        
        return
         currentProject={id:'0',title:'0',desc:'ss',tasks:[{id:'s',task:'t'}]}
         
     }
    //buttons styles
    const closeButtonStyle=`ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10`
    const deleteButtonStyle=`text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  `
    const xButton=`text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center `

  
  
    
    return (

        <dialog  ref={ref} className='overflow-y-auto overflow-x-hidden fixed top-24 right-0 left-0 z-50 justify-center items-center bg-transparent cursor-default' >
        
            <div class="relative p-4 w-full max-w-2xl max-h-full">
       
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-orange-900 ">
                    {currentProject.title}
                </h3>
                <button onClick={()=>ref.current.close()} type="button" class={xButton}>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
          
            <div class="p-4 md:p-5 space-y-4">
            <h1 className='text-lg font-bold' >Description:</h1>
            <p className="text-base leading-relaxed text-gray-500 ">{currentProject.desc}</p>
            <h1 className='text-lg font-bold'>Tasks:</h1>
            <p class="text-base leading-relaxed text-gray-700 ">
                {<ul className='  bg-orange-300  rounded-md'>

                {currentProject.tasks.map((task,index)=>{return (
                
                <li className={` flex pl-6 p-1 border-gray-50 ${index!==currentProject.tasks.length-1?'border-b-2':''}`}>{task.task}</li>
                )})}

                </ul>
                }
                
                </p>
                
            
            <p class="text-base leading-relaxed text-gray-500 "> <span className=' font-bold'>ends in:</span> {currentProject.endDue}</p>
            </div>
           
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
            <button class={deleteButtonStyle} onClick={()=>{deleteProject(pId)}} >Delete project</button>
            <button class={closeButtonStyle} onClick={()=>{ref.current.close()}} >Close</button>

            </div>
        </div>
    </div>
      </dialog>
      

    )
}


)
export default ProjectDetail;