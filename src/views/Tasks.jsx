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
  const changeTaskStatus = (index) => {
    /*Opcion 1:
    const task = taskList[index];
    task.isCompleted = !task.isCompleted;
    taskList[index] = task;*/
    taskList[index].isCompleted = true;
    setTaskList([...taskList]);
  };
  /*const deleteTask = (index) =>{
    taskList.splice(index);
    setTaskList([...taskList]);
  }*/

  return (
    <div className="container">
      <h2>Todo List</h2>
      <br />
      <CreateTask saveNewTask={saveNewTask} />
      <br />
      <TasksList taskList={taskList} changeTaskStatus={changeTaskStatus} />
    </div>
  );
};

export default Tasks;

// keys, no es recomendable usar index, podes usar el id o una combinación entre index y otro elemento
