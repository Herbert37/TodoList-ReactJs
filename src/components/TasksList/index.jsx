import React from "react";

const TasksList = ({ taskList }) => {
  return (
    <div>
      {taskList.map((item, index) => (
        <div key={index}>
          <h1>{item.description}</h1>
          {/* {<h2>{item.date}</h2>} */}
          {item.isCompleted ? (
            <h2>Task Completed</h2>
          ) : (
            <button>Complete task</button>
          )}
        </div>
      ))}
    </div>
  );
};

//map => map(() => ())

export default TasksList;
