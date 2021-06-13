import React, { useState } from "react";
import CreateTask from "../components/CreateTask";

const Tasks = () => {
  const [taskList, setTaskList] = useState([]);

  const saveNewTask = (taskDescription) => {
    const newTasks = taskList.concat({
      description: taskDescription,
      date: new Date(),
      isCompleted: false,
    });
    setTaskList(newTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <CreateTask saveNewTask={saveNewTask} />
    </div>
  );
};

export default Tasks;
