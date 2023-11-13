import React from 'react';
import {debug} from "util";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string;
    tasks: Array<TaskType>
    removeTasks: Function
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
                {
                    props.tasks.map((t) => {
                        return (
                            <li>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button onClick={ () => { props.removeTasks(t.id) } }>x</button>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};