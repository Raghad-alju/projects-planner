import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import AddProject from './components/AddProject';
import SideMenu from './components/SideMenu';
import projects from './projects';
import { useState } from 'react';
// a new change from laptop skdfnklsflskl
var storedProjects=[];
function App() {
   const [visibility, setVisibilty] = useState({ showProj: true, addProj: false });
   if(localStorage.getItem("projectList")!==null){
      console.log(JSON.parse(localStorage.getItem("projectList")))
   storedProjects=JSON.parse(localStorage.getItem("projectList"));
}
   const [projectList, setProjectList] = useState([...projects,...storedProjects]);

   function updateProjectList(id) {
    
      var temp=projectList.filter((p) => { return p.id !== id });
      setProjectList(temp)
   }
   function handleProjectList(project){
      setProjectList([...projectList,project]);
   }
   function saveProject(projObj) {
      console.log(projObj);
      setProjectList((prev) => { return [...prev, projObj] })
      var storedProj=[projObj,...storedProjects];
 
      localStorage.setItem("projectList",JSON.stringify(storedProj))
      handleVisibility();
      
   }

   function handleVisibility() {
      setVisibilty((prev) => { return { addProj: !prev.addProj, showProj: !prev.showProj } });
   }
   return (

      <>
         <Navbar />

         <SideMenu handleVisibility={handleVisibility} visibility={visibility} />
         <AddProject visibility={visibility.addProj} saveProject={saveProject} opration={'save'} />

         <Project visibility={visibility.showProj} projectList={projectList} handleVisibility={handleVisibility} updateProjectList={updateProjectList} handleProjectList={handleProjectList} />

      </>
   );
}

export default App;
