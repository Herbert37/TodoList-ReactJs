import React, { useState } from "react";
import CreateTask from "../components/CreateTask";
import TasksList from "../components/TasksList";

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
      <TasksList taskList={taskList} />
    </div>
  );
};

export default Tasks;

// keys, no es recomendable usar index, podes usar el id o una combinación entre index y otro elemento
