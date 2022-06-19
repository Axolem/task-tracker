import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "School Meeting",
      day: "Feb 6th at 9:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 7th at 10:30pm",
      reminder: true,
    },
  ]);

  // Delet Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !tasks.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracer" author="Xoli" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "0 Tasks"
      )}
    </div>
  );
}

export default App;
