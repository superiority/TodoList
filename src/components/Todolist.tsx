import React from 'react';
import {debug} from "util";

type TaskType = {
    id: number
    title: string
    isDone: Boolean
}

type PropsType = {
    title: string;
    tasks: Array<TaskType>
}

export const Todolist = (props: PropsType) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" /><span>CSS</span></li>
                <li><input type="checkbox" /><span>JS</span></li>
                <li><input type="checkbox" /><span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};