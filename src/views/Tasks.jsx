import React, { useState } from "react";
import CreateTask from "../components/CreateTask";
import TasksList from "../components/TasksList";

const Tasks = () => {
  const [taskList, setTaskList] = useState([]);

  const saveNewTask = (taskDescription) => {
    let datetime = new Date();
    const newTasks = taskList.concat({
      description: taskDescription,
      date: `${datetime.getDate()}/${datetime.getMonth()}/${datetime.getFullYear()}, ${datetime.getHours()}:${datetime.getMinutes()}`,
      isCompleted: false,
    });
    setTaskList(newTasks);
  };

  return (
    <div class="container">
      <h2>Todo List</h2>
      <br />
      <CreateTask saveNewTask={saveNewTask} />
      <br />
      <TasksList taskList={taskList} />
    </div>
  );
};

export default Tasks;

// keys, no es recomendable usar index, podes usar el id o una combinación entre index y otro elemento
