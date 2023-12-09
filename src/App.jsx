import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import AddProject from './components/AddProject';
import SideMenu  from './components/SideMenu';
import projects from './projects';
import {useState} from 'react';
// a new change from laptop skdfnklsflskl
function App() {
   const [visibility,setVisibilty] = useState({showProj:true, addProj:false});
   const [projectList,setProjectList] = useState([...projects]);

   function saveProject(projObj,opration)
   {
      if(opration==='save'){
      setProjectList((prev)=>{return [...prev,projObj]})}
      if(opration==='edit'){
         var index=projectList.findIndex((p)=>{return(p.id === projObj.id)})
         setProjectList((prev)=>{
            var temp= [...prev];
            temp[index]=projObj;
            return (temp)})
      }
   }

   function handleVisibility(){
      setVisibilty((prev)=>{return{addProj:!prev.addProj, showProj:!prev.showProj}});
   }
  return (
  
<>
<Navbar/>

<SideMenu  handleVisibility={handleVisibility} visibility={visibility}/>
<AddProject visibility={visibility.addProj} saveProject={saveProject}/>

<Project visibility={visibility.showProj} projectList={projectList} handleVisibility={handleVisibility}/>

</>
  );
}

export default App;
