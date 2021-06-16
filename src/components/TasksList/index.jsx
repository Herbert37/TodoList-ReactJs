import React from "react";
import CompleteTask from "../CompleteTask";
import DeleteTask from "../DeleteTask";

const TasksList = ({ taskList, changeTaskStatus, deleteTask }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-6">
        {taskList.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">{item.description}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.date}</h6>
              <CompleteTask
                {...item}
                changeTaskStatus={() => changeTaskStatus(index)}
              />
              <br />
              <br />
              <DeleteTask {...item} deleteTask={() => deleteTask(index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//map => map(() => ())

export default TasksList;
