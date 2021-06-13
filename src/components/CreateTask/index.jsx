import React, { useState } from "react";

const CreateTask = () => {
  const [task, setTask] = useState("");

  const onChangeTask = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  return (
    <>
      <input
        value={task}
        type="text"
        onChange={onChangeTask}
        placeholder="Add a new task to the List"
      />
      <button>Add</button>
    </>
  );
};

export default CreateTask;
