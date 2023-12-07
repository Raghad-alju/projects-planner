import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import AddProject from './components/AddProject';
import SideMenu  from './components/SideMenu';
import projects from './projects';
import {useState} from 'react';

function App() {
   const [visibility,setVisibilty] = useState({showProj:true, addProj:false});
   const [projectList,setProjectList] = useState([...projects]);
   function saveProject(projObj)
   {
      setProjectList((prev)=>{return [...prev,projObj]})
   }

   function handleVisibility(){
      setVisibilty((prev)=>{return{addProj:!prev.addProj, showProj:!prev.showProj}});
   }
  return (
  
<>
<Navbar/>

<SideMenu  handleVisibility={handleVisibility} visibility={visibility}/>
<AddProject visibility={visibility.addProj} saveProject={saveProject}/>

<Project visibility={visibility.showProj} projectList={projectList}/>

</>
  );
}

export default App;
