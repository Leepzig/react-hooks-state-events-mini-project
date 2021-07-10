import React from "react";
import Task from "./Task"

function TaskList(props) {

  const arrayToMap = props.category === "All" ? props.tasks : props.tasks.filter( task => task.category === props.category)

  const taskArray = arrayToMap.map(task => <Task key={props.addKey()} text={task.text} category={task.category} deleteTask={props.deleteTask}/>)


  return (
    <div className="tasks">
      {taskArray}
    </div>
  );
}

export default TaskList;
