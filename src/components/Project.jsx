
import React from 'react';
import {useState, useRef} from 'react';
import ProjectDetail from './ProjectDetail';

const box=`mr-5 ml-90 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`
const title=`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`

export default function Project({visibility,projectList}){
var today = new Date();
var Due;
const dialogRef=useRef();

//const [leftDays,setLeftDays] =useState()

function handleDate(date){
console.log(date);


const daysLeft= (year,month,day) =>{
    const eD = new Date(year,month-1,day);
    var timeDiff = eD.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000*3600*24));
}

var [day, month, year] = date.split('/');
Due=daysLeft(year,month,day);

//calculate the left days
console.log('due date',Due);
console.log(Due);
if(Due>0){
    if(Due>7)
    return `${Math.floor(Due/7)} week`;
    else
    return `${Due} days`;
}else if(Due<0){
    return '-';
}else
return '0'

}

return(
   <>

<div hidden={visibility} >
    <div  className="inline-flex p-4 sm:ml-64">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    
    {projectList.map((project,index)=>{
        return(
       

        <div key={project.id} className={box}>
        <ProjectDetail ref={dialogRef}/>

        <h5 className={title}>{project.title}</h5>
        <p className="line-clamp-2 font-normal text-gray-700 dark:text-gray-400">{project.desc}</p>

        <p className="font-normal text-gray-700 dark:text-gray-400" hidden={handleDate(project.startDue) === '-' || handleDate(project.startDue) ==='0' ? true : false} >starts in {handleDate(project.startDue)}</p>           
        <p className="font-normal text-gray-700 dark:text-gray-400" >{handleDate(project.endDue) === '0'? 'Due today':`ends in ${handleDate(project.endDue)}`}</p>
        
        <button onClick={()=>dialogRef.current.showModal()}>view detail</button>            
        </div>
            
        )
    }
    )}
    </div>
    </div>
    </div>
    </>
    )

}