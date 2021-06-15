import React from "react";

const TasksList = ({ taskList }) => {
  return (
    <div class="row justify-content-center">
      <div class="col-sm-6">
        {taskList.map((item, index) => (
          <div class="card" key={index}>
            <div class="card-body">
              <h5 class="card-title">{item.description}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{item.date}</h6>
              {item.isCompleted ? (
                <h6 class="card-subtitle mb-2 text-muted fst-italic">
                  Task Completed
                </h6>
              ) : (
                <button type="button" class="btn btn-outline-success">
                  Complete task
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//map => map(() => ())

export default TasksList;
