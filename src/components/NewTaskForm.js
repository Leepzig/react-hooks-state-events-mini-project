import React from "react";

function NewTaskForm(props) {

  const categoryArray = props.CATEGORIES.map( category => <option key={props.addKey()} value={category}>{category}</option>)

  return (
    <form className="new-task-form" onSubmit={props.addTask}>
      <label>
        Details
        <input onChange={props.getNewTask}  type="text" name="text" value={props.newTask.text}/>
      </label>
      <label>
        Category
        <select onChange={props.getNewTask} value={props.newTask.category} name="category">
          {categoryArray}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
