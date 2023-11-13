import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";

function App() {

    let tasks: Array<TaskType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ]
    function removeTask(id: number) {
        tasks = tasks.filter((t) => {
            debugger
            return t.id !== id

        })
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