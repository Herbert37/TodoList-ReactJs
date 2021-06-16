import React from "react";

const CompleteTask = ({ isCompleted, changeTaskStatus }) => {
  return (
    <>
      {isCompleted ? (
        <h6 className="card-subtitle mb-2 text-muted fst-italic">
          Task Completed
        </h6>
      ) : (
        <button
          type="button"
          onClick={changeTaskStatus}
          className="btn btn-outline-success"
        >
          Complete task
        </button>
      )}
    </>
  );
};

export default CompleteTask;
