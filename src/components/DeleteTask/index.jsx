import React from "react";

const DeleteTask = ({ deleteTask }) => {
  return (
    <>
      <button type="button" onClick={deleteTask} className="btn btn-danger">
        Delete task
      </button>
    </>
  );
};

export default DeleteTask;
