//this is  a new change
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import ProjectDetail from './ProjectDetail';

const box = ` mr-5 ml-90 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 `
const title = `mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`

export default function Project({ visibility, projectList, handleVisibility,updateProjectList,handleProjectList }) {

    const [projectId,setProjectId]=useState(0);
    var today = new Date();
    var Due;
    const dialogRef = useRef();
    
    //const [leftDays,setLeftDays] =useState()
  
    function handleDate(date) {
       


        const daysLeft = (year, month, day) => {
            const eD = new Date(year, month - 1, day);
            var timeDiff = eD.getTime() - today.getTime();
            return Math.ceil(timeDiff / (1000 * 3600 * 24));
        }

        var [day, month, year] = date.split('/');
        Due = daysLeft(year, month, day);

        //calculate the left days
  
        if (Due > 0) {
            if (Due > 7){
                if(Math.floor(Due / 7)===1)
                return `Due in ${Math.floor(Due / 7)} week`;
                else
                return `Due in ${Math.floor(Due / 7)} weeks`
            }
            else{
                return `Due in ${Due} days`;
            }
        } else if (Due < 0) {
            return 'Over Due';
        } else
            return '0'

    }
 
    //const [currentProjects,setCurrentProjects]=useState(projectList)
    const [doingProjects,setdoingProjects] =useState([])
    const [doneProjects,setDoneProjects] =useState([])

    function handleOnDrag(e,Project){
      
        e.dataTransfer.setData("dragedProject",JSON.stringify(Project));
    
    }
    function handleOnDrop(e,...loc){
        if(loc=='doing'){
        const doingProject =JSON.parse(e.dataTransfer.getData("dragedProject"));
        
        if(doingProjects.find(p=>p.id === doingProject.id) === undefined)
        setdoingProjects([...doingProjects,doingProject])

      
        updateProjectList(doingProject.id);
        newList=doneProjects.filter(p=>p.id !== doingProject.id)
        setDoneProjects(newList)
    }if(loc=='done'){
        const doneProject =JSON.parse(e.dataTransfer.getData("dragedProject"));

        if(doneProjects.find(p=>p.id === doneProject.id) === undefined)
        setDoneProjects([...doneProjects,doneProject])

        var newList=doingProjects.filter(p=>p.id !== doneProject.id)
        setdoingProjects(newList);
        //newList=projectList.filter(p=>p.id !== doneProject.id)
        updateProjectList(doneProject.id);

    }if(loc=='current'){
        const currentProject =JSON.parse(e.dataTransfer.getData("dragedProject"));

        if(projectList.find(p=>p.id === currentProject.id) === undefined)
        handleProjectList(currentProject)
        var newList=doingProjects.filter(p=>p.id !== currentProject.id)
        setdoingProjects(newList);
        newList=doneProjects.filter(p=>p.id !== currentProject.id)
        setDoneProjects(newList)
    }
    }
    function handleDragOver(e){
        e.preventDefault();
    }
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);  
    function deleteProject(id){
        setdoingProjects(doingProjects.filter(p=>p.id !== id))
        setDoneProjects(doneProjects.filter(p=>p.id !== id))
        updateProjectList(id)
        dialogRef.current.close();
        
    }
    const projectsStage=[projectList,doingProjects,doneProjects];



    function Card({project,cardColor}){
    
        return(  <div key={project.id} className={box+`hover:cursor-grab shadow-red-300 ${cardColor} `} draggable onDragStart={(e)=>handleOnDrag(e,project)}>
    
        <h5 className={title+' text-orange-700'}>{project.title}</h5>
        <p className="line-clamp-2 md:line-clamp-3 font-normal text-gray-700 ">{project.desc}</p>
    
        <p  className={`inline-flex px-1 rounded-md font-normal text-gray-800 ${handleDate(project.endDue) == '0'? 'bg-red-400' : handleDate(project.endDue).substr(-5) === 'weeks'?'bg-green-300':'bg-yellow-300'}`} >{handleDate(project.endDue) === '0' ? `Due today` : `${handleDate(project.endDue)}`}</p>
        <br/>
        <button className={` bg-orange-500 py-1 px-2 mx-auto mt-3 text-white rounded-lg hover:bg-orange-600`} onMouseOver={()=>setProjectId(project.id)} onClick={() => {console.log(project.id);if(dialogRef.current!=null)dialogRef.current.showModal();}}>
            View details</button>
            
        <ProjectDetail ref={dialogRef} pId={projectId} projectList={projectList} handleVisibility={handleVisibility}  deleteProject={deleteProject} forceUpdate={forceUpdate}/>
        
    
    </div>
    )
    
    
    }



    return (
        <>

            <div hidden={visibility} className='' >


                <div className="grid grid-cols-1 md:grid-cols-1 p-6  lg:mx-72 mx-10 justify-center mt-10  bg-gradient-to-br from-orange-400 to-orange-300 rounded-2xl">


                <div className='  flex text-2xl font-bold pb-6 text-white'>Current Projects</div>
                    <div className={` grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white rounded-xl border border-3 border-dashed border-gray-700  w-auto ${projectList.length==0?'h-48':'h-auto'} `} onDrop={(e)=>handleOnDrop(e,'current')} onDragOver={handleDragOver}>

                        {projectList.map((project) => {
                            
                            return (
                             
                               <Card project={project} cardColor={'bg-gradient-to-br from-amber-100 to-orange-200'}/>

                            )
                        }
                        )} 
                    </div>

                    <div className='flex text-2xl font-bold pt-4 pb-6 text-white'>On Progress</div>
                    <div className={` grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-xl border border-3 border-dashed border-gray-700 w-auto ${doingProjects.length==0?'h-48':'h-auto'} `} onDrop={(e)=>handleOnDrop(e,'doing')} onDragOver={handleDragOver}>
                        {doingProjects.map((project)=>{return(
                           <Card project={project} cardColor={'bg-gradient-to-br from-amber-100 to-orange-200'}/>
                        )})}

                        </div>

                        <div className='flex text-2xl font-bold pb-6 text-white'>Done</div>
                        <div className={` grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-xl border border-3 border-dashed border-gray-700 w-auto ${doneProjects.length==0?'h-48':'h-auto'} `} onDrop={(e)=>handleOnDrop(e,'done')} onDragOver={handleDragOver}>
                        {doneProjects.map((project,index)=>{return(
                           <Card project={project} cardColor={' bg-gradient-to-br from-amber-100 to-orange-200'}/>
                        )})}

                        </div>
                </div>
                

            </div>
        </>
    )

}
