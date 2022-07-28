import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Task from './components/Task'


const App = () => { 
  const [showAddTask, setshowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
    {
        id: 2,
        text: 'School Meeting',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 7th at 11:10am',
        reminder: false,
    },
    
])

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder: !task.reminder} : task))
}

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//delete task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}
  
  return (
    <div className="container">
     <Header />
     <AddTask onAdd={addTask} />
     {tasks.length > 0 ?<Tasks tasks={tasks}
      onDelete={deleteTask} onToggle={toggleReminder} /> : <h5>Nothing to show</h5> }
    </div>
  )
}


export default App;
