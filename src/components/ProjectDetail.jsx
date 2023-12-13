
import React, { useState } from 'react';
import {forwardRef} from 'react';

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
            <p className="text-base leading-relaxed text-gray-500 m-4 ">{currentProject.desc}</p>
            <h1 className='text-lg font-bold' hidden={currentProject.tasks.length===0}>Tasks:</h1>
            <p class="text-base leading-relaxed text-gray-700 ">
                {<ul className='  bg-orange-100 w-3/4 m-4  rounded-md'>

                {currentProject.tasks.map((task,index)=>{return (
                
                <li className={` flex pl-6 p-1 border-gray-50 ${index!==currentProject.tasks.length-1?'border-b-2':''}`}>{task.task}</li>
                )})}

                </ul>
                }
                
                </p>
                
            
            <p class="text-base leading-relaxed text-gray-600 "> <span className=' font-bold text-gray-800'>ends in:</span> {currentProject.endDue}</p>
            </div>
           
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
            <button className={deleteButtonStyle} onClick={()=>{deleteProject(pId)}} >
            <svg className="float-left w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
            </svg>
            Delete project</button>
            <button className={closeButtonStyle} onClick={()=>{ref.current.close()}} >Close</button>

            </div>
        </div>
    </div>
      </dialog>
      

    )
}


)
export default ProjectDetail;