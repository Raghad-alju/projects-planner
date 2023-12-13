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
import Datepicker from "tailwind-datepicker-react";
import { useState, useRef } from "react";

export default function AddProject({ saveProject, visibility, opration }) {
  //calander view
  const [show2, setShow2] = useState(false);

  const handleClose2 = (state) => {
    setShow2(state);
  };
  //

  //Styles
  const inputStyle = `default-input" class="bg-gray-50 border
     border-gray-300 rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
     my-4`;
  const labelStyle = `block mb-2 text-sm font-medium text-gray-900 `;
  //
  var [project, setProject] = useState({
    id: Date.now(),
    title: "",
    desc: "",
    endDue: new Date().toLocaleDateString(),
    tasks: [],
  });

  const titleInput = useRef();
  const descInput = useRef();
  const tasks = useRef();

  function saveInput() {
    setProject((prev) => {
      return {
        ...prev,
        desc: descInput.current.value,
        title: titleInput.current.value,
      };
    });
  }

  function handleClear(id) {
    var filteredTasks = project.tasks.filter((t) => {
      return t.id !== id;
    });
    setProject((prev) => {
      return { ...prev, tasks: filteredTasks };
    });
  }

  return (
    <div hidden={visibility} className="p-4 lg:mx-64 mx-10">
      <label for="default-input" className={labelStyle}>
        Project Title
      </label>
      <input
        onMouseLeave={saveInput}
        ref={titleInput}
        placeholder="Project Title..."
        className={inputStyle}
        type="text"
        id=""
      />

      <label
        for="message"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Description
      </label>
      <textarea
        onMouseLeave={saveInput}
        ref={descInput}
        id="message"
        rows="4"
        className={inputStyle}
        placeholder="Write your thoughts here..."
      ></textarea>

      <label className={labelStyle}>Due Date</label>
      <div className="flex items-center mt-2">
        <div className="relative">
          <Datepicker
            onChange={(date) => {
              const d = new Date(date).toLocaleDateString();
              setProject((prev) => {
                return { ...prev, endDue: d };
              });
            }}
            show={show2}
            setShow={handleClose2}
            name="end"
            type="text"
            options={options}
          />
        </div>
      </div>
      <div className="mt-16">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  "></thead>
            {project.tasks.map((task, index) => {
              return (
                <tbody key={task.id}>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {index + 1}
                    </th>
                    <td className="px-8 py-4">{task.task}</td>
                    <td className="px-8 py-4">
                      <button onClick={() => handleClear(task.id)}>
                        clear
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>

        <input
          ref={tasks}
          placeholder="Add task..."
          className=' float-left bg-gray-50 borde border-gray-300 rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5
     my-4'
          type="text"
          id=""
        />
      </div>
      <button className="w-1/4 h-16"
        onClick={() =>
          setProject((prev) => {
            return {
              ...prev,
              tasks: [
                ...prev.tasks,
                {
                  id: Math.floor(Math.random() * 100),
                  task: tasks.current.value,
                },
              ],
            };
          })
        }
      >
        Add task
      </button>

      <button className="" onClick={() => saveProject(project, opration)}>
        Save
      </button>
    </div>
  );
}

const options = {
  maxDate: new Date("2030-01-01"),
  minDate: new Date(),
  theme: {
    disabledText: "bg-gray-100 rounded-none",
  },
  defaultDate: new Date(),
};
