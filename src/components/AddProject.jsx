// Copyright 2023 ragad
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import Datepicker from "tailwind-datepicker-react"
import { useState, useEffect, useRef } from 'react';
import { useTheme } from "next-themes"
import { ThemeProvider } from "next-themes"
import { Dropdown } from 'flowbite-react';

export default function AddProject({ saveProject, visibility, editProject, opration}) {
    console.log(editProject);
    //calander view
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const handleClose = (state) => {

        setShow(state)
    }
    const handleClose2 = (state) => {
        setShow2(state)
    }
    //

    //Styles
    const inputStyle = `default-input" class="bg-gray-50 border
     border-gray-300 rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4`;
    const labelStyle = `block mb-2 text-sm font-medium text-gray-900 dark:text-white`;
    //
    var [project, setProject] = useState({ id: Date.now(), title: '', desc: '', startDue: new Date().toLocaleDateString(), endDue: new Date().toLocaleDateString(), tasks: [] });

    if(opration==='edit'){
        project=editProject
    }
    const titleInput = useRef();
    const descInput = useRef();
    const tasks = useRef();

    function saveInput() {
        setProject((prev) => {
            return { ...prev, desc: descInput.current.value, title: titleInput.current.value }
        })

    }

    function handleClear(id) {
        
        var filteredTasks = project.tasks.filter((t) => { return t.id !== id });
        setProject((prev) => { return { ...prev, tasks: filteredTasks } })
    
    }

    return (
        <ThemeProvider attribute="class" enableColorScheme={false} defaultTheme="light">
            <div hidden={visibility} className="p-4 sm:ml-64">
                <ThemeSelector />


                <label for="default-input" class={labelStyle}>Project Title</label>
                <input onMouseLeave={saveInput} ref={titleInput} placeholder="Project Name..." className={inputStyle} type="text" id="" value={project.title} />

                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea onMouseLeave={saveInput} ref={descInput} id="message" rows="4" className={inputStyle} placeholder="Write your thoughts here..." value={project.desc}></textarea>


                <div class="flex items-center mt-4">
                    <div class="relative">

                        <Datepicker onChange={(date) => {
                            const d = new Date(date).toLocaleDateString();
                            setProject((prev) => { return { ...prev, startDue: d } })
                        }} options={options} show={show} setShow={handleClose} name="start" type="text" />
                    </div>
                    <span class="mx-4 text-gray-500">to</span>
                    <div class="relative">


                        <Datepicker onChange={(date) => {
                            const d = new Date(date).toLocaleDateString();
                            setProject((prev) => { return { ...prev, endDue: d } })
                        }} show={show2} setShow={handleClose2} name="end" type="text" />

                    </div>
                </div>
                <input ref={tasks} placeholder="Add task..." className={inputStyle} type="text" id="" />

                <button onClick={() => setProject((prev) => { return { ...prev, tasks: [...prev.tasks, { id: Math.floor(Math.random() * 100), task: tasks.current.value }] } })}>Add task</button>



                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="  w-2 px-8 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-8 py-3">
                                    Color
                                </th>
                            </tr>
                        </thead>
                        {project.tasks.map((task, index) => {
                            return (<tbody key={task.id}>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index+1}
                                    </th>
                                    <td class="px-8 py-4">
                                        {task.task}
                                    </td>
                                    <td class="px-8 py-4">
                                        <button onClick={() => handleClear(task.id)}>clear</button>
                                    </td>
                                </tr>


                            </tbody>)
                        })
                        }

                    </table>
                </div>




                <button onClick={() => saveProject(project)}>Save</button>

            </div>
        </ThemeProvider>


    )
}

const options = {
    maxDate: new Date("2030-01-01"),
    minDate: new Date(),
    theme: {
        disabledText: "bg-gray-100 rounded-none",
    },
    defaultDate: new Date(2020,10,12),
}

export const ThemeSelector = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return null
    return (
        <>
            {theme === "light" || theme === "system" || theme == undefined ? (
                <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-1 focus:ring-blue-300" onClick={() => setTheme("dark")}>
                    <MoonIcon className="w-6 h-6 text-yellow-500" />
                </button>

            ) : (
                <button className="p-2 bg-gray-700 rounded-md hover:bg-gray-800 focus:ring-1 focus:ring-blue-300" onClick={() => setTheme("light")}>
                    <SunIcon className="w-6 h-6 text-yellow-500" />
                </button>
            )}
        </>
    )
}


