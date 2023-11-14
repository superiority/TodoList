import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from "./components/Todolist";

function App() {

    let [tasks, setTasks] = useState([
        { id: 1, title: "CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "React", isDone: false },
        { id: 4, title: "Redux", isDone: false },
    ]);

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    return (
        <div className="App">
            <Todolist
                title="What a learn?"
                tasks={tasks}
                removeTasks={removeTask}
            />
        </div>
    );
}

export default App;
