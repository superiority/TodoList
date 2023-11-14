import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";
import {v1} from 'uuid';

export type FilterValuesType = "all" | "completed" | "active";

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("completed");

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        };
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
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
                addTask={addTask}
            />
        </div>
    );
}

export default App;
