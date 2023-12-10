//this is  a new change
import React from 'react';
import { useState, useRef } from 'react';
import ProjectDetail from './ProjectDetail';
import AddProject from './AddProject';

const box = `mr-5 ml-90 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 `
const title = `mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`

export default function Project({ visibility, projectList, handleVisibility,updateProjectList,handleProjectList }) {

    const [projectId,setProjectId]=useState(projectList[0].id);
    var today = new Date();
    var Due;
    const dialogRef = useRef();
    
    //const [leftDays,setLeftDays] =useState()
    const [vis,setVis]=useState(true);
    const [tempStore,setTempStore]=useState({});
    const [opration,setOp]=useState('');
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
            if (Due > 7)
                return `${Math.floor(Due / 7)} week`;
            else
                return `${Due} days`;
        } else if (Due < 0) {
            return '-';
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
        
        setdoingProjects([...doingProjects,doingProject])

        //var newList=projectList.filter(p=>p.id !== doingProject.id)
        updateProjectList(doingProject.id);
        newList=doneProjects.filter(p=>p.id !== doingProject.id)
        setDoneProjects(newList)
    }if(loc=='done'){
        const doneProject =JSON.parse(e.dataTransfer.getData("dragedProject"));

        setDoneProjects([...doneProjects,doneProject])
        var newList=doingProjects.filter(p=>p.id !== doneProject.id)
        setdoingProjects(newList);
        //newList=projectList.filter(p=>p.id !== doneProject.id)
        updateProjectList(doneProject.id);

    }if(loc=='current'){
        const currentProject =JSON.parse(e.dataTransfer.getData("dragedProject"));
      
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
    return (
        <>

            <div hidden={visibility} className='' >
                <div className="grid grid-cols-1 md:grid-cols-1 p-4 sm:mx-72 justify-center mt-10 ">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-[60rem] p-4 border rounded-xl border-3 border-gray-700" onDrop={(e)=>handleOnDrop(e,'current')} onDragOver={handleDragOver}>

                        {projectList.map((project, index) => {
                            return (


                                <div key={project.id} className={box+'hover:cursor-grab'} draggable onDragStart={(e)=>handleOnDrag(e,project)}>
                                    <ProjectDetail ref={dialogRef} pId={projectId} projectList={projectList} handleVisibility={handleVisibility} updateProjectList={updateProjectList} />

                                    <h5 className={title}>{project.title}</h5>
                                    <p className="line-clamp-2 font-normal text-gray-700 dark:text-gray-400">{project.desc}</p>

                                    <p className="font-normal text-gray-700 dark:text-gray-400" >{handleDate(project.endDue) === '0' ? 'Due today' : `ends in ${handleDate(project.endDue)}`}</p>
                                    
                                    <button onClick={() => {if(dialogRef.current!=null)dialogRef.current.showModal(); setProjectId(project.id)}}>view detail</button>
                                </div>

                            )
                        }
                        )}
                       
                    </div>
                    <div className={` grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl border border-3 border-black w-[60rem] ${doingProjects.length==0?'h-48':'h-auto'} `} onDrop={(e)=>handleOnDrop(e,'doing')} onDragOver={handleDragOver}>
                        {doingProjects.map((project,index)=>{return(
                            <div key={project.id} className={box+'hover:cursor-grab'} draggable onDragStart={(e)=>handleOnDrag(e,project)}>
                                    <ProjectDetail ref={dialogRef} pId={projectId} projectList={projectList} handleVisibility={handleVisibility}  updateProjectList={updateProjectList} />

                                    <h5 className={title}>{project.title}</h5>
                                    <p className="line-clamp-2 font-normal text-gray-700 dark:text-gray-400">{project.desc}</p>

                                    <p className="font-normal text-gray-700 dark:text-gray-400" >{handleDate(project.endDue) === '0' ? 'Due today' : `ends in ${handleDate(project.endDue)}`}</p>
                                    
                                </div>
                        )})}

                        </div>
                        <div className={` grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl border border-3 border-black w-[60rem] ${doneProjects.length==0?'h-48':'h-auto'} `} onDrop={(e)=>handleOnDrop(e,'done')} onDragOver={handleDragOver}>
                        {doneProjects.map((project,index)=>{return(
                            <div key={project.id} className={box+'hover:cursor-grab'} draggable onDragStart={(e)=>handleOnDrag(e,project)}>
                                    <ProjectDetail ref={dialogRef} pId={projectId} projectList={projectList} handleVisibility={handleVisibility} updateProjectList={updateProjectList} />

                                    <h5 className={title}>{project.title}</h5>
                                    <p className="line-clamp-2 font-normal text-gray-700 dark:text-gray-400">{project.desc}</p>

                                    <p className="font-normal text-gray-700 dark:text-gray-400" >{handleDate(project.endDue) === '0' ? 'Due today' : `ends in ${handleDate(project.endDue)}`}</p>
                                    
                                </div>
                        )})}

                        </div>
                </div>
                

            </div>
            <AddProject opration={opration} visibility={vis} editProject={tempStore}/>
        </>
    )

}