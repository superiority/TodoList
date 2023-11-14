import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";

export type FilterValuesType = "all" | "completed" | "active";

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("completed");

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    let tasksForTodolist = tasks.filter(t => (
        (filter === "completed" && t.isDone) ||
        (filter === "active" && !t.isDone) ||
        filter === "all"
    ));


    return (
        <div className="App">
            <Todolist
                title="What a learn?"
                tasks={tasksForTodolist}
                removeTasks={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
