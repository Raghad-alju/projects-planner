import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import AddProject from './components/AddProject';
import SideMenu from './components/SideMenu';
import projects from './projects';
import { useState } from 'react';
// a new change from laptop skdfnklsflskl
function App() {
   const [visibility, setVisibilty] = useState({ showProj: true, addProj: false });
   const [projectList, setProjectList] = useState([...projects]);

   function updateProjectList(id) {
    
      var temp=projectList.filter((p) => { return p.id !== id });
      setProjectList(temp)
   }
   function handleProjectList(project){
      setProjectList([...projectList,project]);
   }
   function saveProject(projObj, opration) {
      console.log(projObj);
      if (opration === 'save') {
         setProjectList((prev) => { return [...prev, projObj] })
      }
      if (opration === 'edit') {
         var index = projectList.findIndex((p) => { return (p.id === projObj.id) })
         setProjectList((prev) => {
            var temp = [...prev];
            temp[index] = projObj;
            return (temp)
         })
      }
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
