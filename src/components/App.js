import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  //helper Key generator
  let key = 0
  const addKey = () => key += 1

    //States
  const [tasks, setTasks] =useState(TASKS)
  const [newTask, setNewTask] = useState({
    text:"",
    category:""
  })
  
  //finish this!!!!
  function getNewTask (event) {
    const key = event.target.name
    setNewTask({
      ...newTask, 
      [key]:event.target.value})
  }

    ///finish here!!!
  function addTask(e) {
    e.preventDefault()
    setTasks([...tasks, newTask])
  }

  function deleteTask (text) {
    setTasks(tasks.filter(task => task.text !== text))
  }

//category State
  const [category, setCategory] = useState("All")

  function filter (e) {
    setCategory(e.target.name)

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} TASKS={TASKS} addKey={addKey} category={category} filter={filter}/>
      <NewTaskForm getNewTask={getNewTask} CATEGORIES={CATEGORIES} newTask={newTask} addKey={addKey} addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} addKey={addKey} category={category}/>
    </div>
  );
}

export default App;
