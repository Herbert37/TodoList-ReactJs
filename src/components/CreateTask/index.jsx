import React, { useState } from "react";

const CreateTask = ({ saveNewTask }) => {
  const [task, setTask] = useState("");

  const onChangeTask = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  return (
    <>
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <div class="input-group">
            <input
              type="text"
              onChange={onChangeTask}
              class="form-control"
              placeholder="Add a new task to the List"
            />
            <button
              onClick={() => saveNewTask(task)}
              class="btn btn-outline-primary"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

//defaultProps: en que ayudan, nos sirven cuando queremos dejar valores por defecto
CreateTask.defaultProps = {
  saveNewTask: () => {},
};
// que nos garantizan las defaultProps, que si no viene esa prop, tiene un valor por defecto y no rompe el app

export default CreateTask;
